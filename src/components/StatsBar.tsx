import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";
import { UserCheck, Users, Layers, ShieldCheck, Clock } from "lucide-react";

const STATS = [
  { icon: UserCheck, value: 10, suffix: "K+", label: "Professionals Placed", isYear: false },
  { icon: Users, value: 500, suffix: "+", label: "Happy Clients", isYear: false },
  { icon: Layers, value: 15, suffix: "+", label: "Industries Served", isYear: false },
  { icon: ShieldCheck, value: 95, suffix: "%", label: "Client Retention", isYear: false },
  { icon: Clock, value: 48, suffix: "h", label: "Avg. Delivery", isYear: false },
];

function CountUp({ to, suffix, isYear }: { to: number; suffix: string; isYear: boolean }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          count.set(0);
          animate(count, to, {
            duration: isYear ? 2.5 : 3.8,
            ease: isYear ? "easeOut" : [0.16, 1, 0.3, 1],
          });
        }
      },
      { threshold: 0.65 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [count, to, isYear]);

  return (
    <span className="inline-flex items-baseline justify-center">
      <motion.span ref={ref}>{rounded}</motion.span>
      <span>{suffix}</span>
    </span>
  );
}

export function StatsBar({ className = "relative -mt-12 z-20 mx-auto max-w-4xl px-4 lg:px-8" }: { className?: string } = {}) {
  return (
    <div className={className}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-2xl bg-white/95 backdrop-blur shadow-elegant ring-1 ring-black/5"
      >
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-brand" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 md:divide-x md:divide-border/50">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 + i * 0.08 }}
              className="group flex flex-col items-center text-center gap-1.5 px-3 py-3.5"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow">
                <s.icon className="h-4 w-4" />
              </span>
              <div className="text-xl md:text-2xl font-black tracking-tight leading-none tabular-nums text-gradient-brand">
                <CountUp to={s.value} suffix={s.suffix} isYear={s.isYear} />
              </div>
              <div className="text-[0.58rem] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
