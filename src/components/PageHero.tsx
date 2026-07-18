import { motion } from "motion/react";

interface Props {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  image: string;
  align?: "left" | "center";
  children?: React.ReactNode;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function PageHero({ eyebrow, title, subtitle, image, align = "center", children }: Props) {
  return (
    <section className="relative min-h-[62vh] flex items-center justify-center overflow-hidden pt-28 pb-16 bg-[#051124]">
      <div className="absolute inset-0">
        <img src={image} alt="" className="h-full w-full object-cover animate-kenburns" />
        {/* Balanced overlay — image stays visible, text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/55 to-navy-deep/80" />
        <div className="absolute inset-0 bg-navy-deep/25" />
        {/* Panning grid */}
        <div
          className="absolute inset-0 opacity-[0.10] animate-grid-pan"
          style={{
            backgroundImage:
              "linear-gradient(rgba(96,165,250,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.5) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage: "radial-gradient(ellipse at center, black 20%, transparent 72%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 72%)",
          }}
        />
      </div>
      {/* Drifting brand glow accents */}
      <div className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-brand-glow/10 blur-3xl animate-drift-slow" />
      <div className="pointer-events-none absolute -bottom-24 left-1/4 h-72 w-72 rounded-full bg-brand/15 blur-3xl animate-drift" />
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className={`relative z-10 mx-auto max-w-4xl px-4 lg:px-8 ${align === "center" ? "text-center" : "text-left"}`}
      >
        {eyebrow && (
          <motion.span
            variants={fadeUp}
            className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-brand-glow mb-4"
          >
            {eyebrow}
          </motion.span>
        )}
        <motion.h1
          variants={fadeUp}
          className="hero-shimmer font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-[1.12] tracking-tight [text-shadow:0_2px_20px_rgba(0,0,0,0.35)]"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p variants={fadeUp} className="mt-5 text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </motion.p>
        )}
        {children && (
          <motion.div variants={fadeUp} className="mt-8">
            {children}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
