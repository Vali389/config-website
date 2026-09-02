import { useEffect, useRef } from "react";

/* ── Types ── */
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  alpha: number;
  color: string;
  pulsePhase: number;
  pulseSpeed: number;
}

const COLORS = [
  "0, 229, 255",   // Electric cyan
  "56, 189, 248",  // Sky blue
  "99, 102, 241",  // Indigo accent
  "147, 197, 253", // Soft ice blue
  "255, 255, 255", // White highlight
];

function rnd(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function createParticle(w: number, h: number): Particle {
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.35,
    vy: (Math.random() - 0.5) * 0.35,
    radius: Math.random() * 2.2 + 1.2,
    baseAlpha: Math.random() * 0.45 + 0.35,
    alpha: Math.random() * 0.45 + 0.35,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    pulsePhase: Math.random() * Math.PI * 2,
    pulseSpeed: Math.random() * 0.015 + 0.008,
  };
}

export function HeroParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    /* ── Resize Handler ── */
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const count = Math.floor((canvas.width * canvas.height) / 12500);
      particlesRef.current = Array.from(
        { length: Math.min(Math.max(count, 45), 75) },
        () => createParticle(canvas.width, canvas.height)
      );
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    /* ── Mouse Events ── */
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };
    const onMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    window.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);

    /* ── Config Constants ── */
    const CONNECT_DIST = 145;
    const TRIANGLE_DIST = 120;
    const MOUSE_REPEL = 130;
    const MOUSE_FORCE = 0.035;

    /* ── Main Render Loop ── */
    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      timeRef.current += 1;
      const t = timeRef.current;
      const mouse = mouseRef.current;

      ctx.clearRect(0, 0, W, H);

      const particles = particlesRef.current;

      /* 1. Update Particle Positions & Handle Mouse Repulsion */
      particles.forEach((p) => {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < MOUSE_REPEL && dist > 0) {
          const force = (MOUSE_REPEL - dist) / MOUSE_REPEL;
          p.vx += (dx / dist) * force * MOUSE_FORCE;
          p.vy += (dy / dist) * force * MOUSE_FORCE;
        }

        // Smooth damping for natural velocity decay
        p.vx *= 0.992;
        p.vy *= 0.992;

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around screen boundaries seamlessly
        if (p.x < -20) p.x = W + 20;
        if (p.x > W + 20) p.x = -20;
        if (p.y < -20) p.y = H + 20;
        if (p.y > H + 20) p.y = -20;

        // Soft breathing pulse
        p.pulsePhase += p.pulseSpeed;
        p.alpha = p.baseAlpha + Math.sin(p.pulsePhase) * 0.18;
      });

      /* 2. Render Geometric Triangles (SPIN Analytics Style Mesh) */
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          for (let k = j + 1; k < particles.length; k++) {
            const pA = particles[i];
            const pB = particles[j];
            const pC = particles[k];

            const distAB = Math.hypot(pA.x - pB.x, pA.y - pB.y);
            const distBC = Math.hypot(pB.x - pC.x, pB.y - pC.y);
            const distCA = Math.hypot(pC.x - pA.x, pC.y - pA.y);

            if (
              distAB < TRIANGLE_DIST &&
              distBC < TRIANGLE_DIST &&
              distCA < TRIANGLE_DIST
            ) {
              const avgDist = (distAB + distBC + distCA) / 3;
              const triAlpha = (1 - avgDist / TRIANGLE_DIST) * 0.07;

              ctx.beginPath();
              ctx.moveTo(pA.x, pA.y);
              ctx.lineTo(pB.x, pB.y);
              ctx.lineTo(pC.x, pC.y);
              ctx.closePath();

              // Delicate gradient fill for geometric tech depth
              ctx.fillStyle = `rgba(0, 180, 255, ${triAlpha})`;
              ctx.fill();
            }
          }
        }
      }

      /* 3. Render Interconnecting Constellation Lines */
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);

          if (d < CONNECT_DIST) {
            const lineAlpha = (1 - d / CONNECT_DIST) * 0.28;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(0, 215, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      /* 4. Render Particle Nodes & Soft Radial Halos */
      particles.forEach((p) => {
        const rad = p.radius;
        const currentAlpha = Math.max(0.1, Math.min(0.9, p.alpha));

        // Soft outer glow halo
        const haloGrad = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          rad * 6
        );
        haloGrad.addColorStop(
          0,
          `rgba(${p.color}, ${Math.min(currentAlpha * 0.7, 0.6)})`
        );
        haloGrad.addColorStop(
          0.6,
          `rgba(${p.color}, ${Math.min(currentAlpha * 0.15, 0.12)})`
        );
        haloGrad.addColorStop(1, `rgba(${p.color}, 0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, rad * 6, 0, Math.PI * 2);
        ctx.fillStyle = haloGrad;
        ctx.fill();

        // Bright core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, rad, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${currentAlpha})`;
        ctx.fill();
      });

      /* 5. Render Interactive Cursor Field Glow & Dynamic Lines */
      if (mouse.x > 0 && mouse.x < W) {
        // Subtle ambient spotlight centered at cursor
        const cursorSpotlight = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          110
        );
        cursorSpotlight.addColorStop(0, "rgba(0, 229, 255, 0.12)");
        cursorSpotlight.addColorStop(0.5, "rgba(56, 189, 248, 0.04)");
        cursorSpotlight.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 110, 0, Math.PI * 2);
        ctx.fillStyle = cursorSpotlight;
        ctx.fill();

        // Crisp lines linking cursor to nearby constellation nodes
        particles.forEach((p) => {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d = Math.sqrt(dx * dx + dy * dy);

          if (d < MOUSE_REPEL * 1.35) {
            const alpha = (1 - d / (MOUSE_REPEL * 1.35)) * 0.42;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(p.x, p.y);
            ctx.strokeStyle = `rgba(0, 229, 255, ${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        });
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ zIndex: 5 }}
      aria-hidden="true"
    />
  );
}
