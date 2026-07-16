import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";
import { Building2, Users, UserCheck, Globe2, ShieldCheck } from "lucide-react";

const STATS = [
  { icon: Building2, value: 2013, suffix: "",   label: "Established",      isYear: true },
  { icon: Users,     value: 500,  suffix: "+",   label: "Clients Served",   isYear: false },
  { icon: UserCheck, value: 10,   suffix: "K+",  label: "Consultants",      isYear: false },
  { icon: Globe2,    value: 3,    suffix: "",     label: "Countries",        isYear: false },
  { icon: ShieldCheck, value: 98, suffix: "%",   label: "Client Retention", isYear: false },
];

function CountUp({ to, suffix, isYear }: { to: number; suffix: string; isYear: boolean }) {
  const count = useMotionValue(isYear ? to - 5 : 0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          animate(count, to, {
            duration: isYear ? 1.4 : 2,
            ease: isYear ? "easeOut" : [0.16, 1, 0.3, 1],
          });
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [count, to, isYear]);

  return (
    <span className="flex items-baseline gap-0">
      <motion.span ref={ref}>{rounded}</motion.span>
      <span>{suffix}</span>
    </span>
  );
}

export function StatsBar() {
  return (
    <div className="relative -mt-16 z-20 mx-auto max-w-6xl px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="rounded-2xl bg-white shadow-elegant border border-border/50 p-6 md:p-8"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-0 md:divide-x md:divide-border/50">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center gap-3 md:gap-4 md:px-6 first:pl-0 last:pr-0 group cursor-default"
            >
              {/* Icon bubble */}
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50/60 border border-blue-100 text-brand group-hover:bg-brand group-hover:border-brand group-hover:text-white transition-all duration-300">
                <s.icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </span>
              <div>
                <div className="text-2xl md:text-3xl font-black text-ink tracking-tight leading-none group-hover:text-brand transition-colors duration-300">
                  <CountUp to={s.value} suffix={s.suffix} isYear={s.isYear} />
                </div>
                <div className="mt-1.5 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  {s.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
