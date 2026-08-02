import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import ctaBg from "@/assets/cta-aerial-city.png";

interface CTASectionProps {
  image?: string;
}

export function CTASection({ image }: CTASectionProps) {
  const bgImg = image || ctaBg;
  return (
    <section className="py-16 px-4 lg:px-8 bg-soft">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden rounded-3xl mx-auto max-w-6xl"
        style={{ minHeight: "380px" }}
      >
        {/* Background image */}
        <img
          src={bgImg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Dark overlay — deep navy blue */}
        <div className="absolute inset-0 bg-navy-deep/80" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-sans text-3xl md:text-4xl lg:text-4xl font-extrabold text-white leading-tight tracking-tight max-w-5xl lg:whitespace-nowrap"
          >
            Ready to Build Your <span className="text-brand-glow italic">Future-Ready</span> Workforce?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 text-white/75 text-base md:text-lg max-w-xl leading-relaxed text-justify"
          >
            From talent to transformation — partner with ConfigUSA and unlock
            world-class IT solutions tailored to your goals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-brand hover:bg-brand/90 px-8 py-4 text-sm font-bold text-white tracking-wide transition-all hover:scale-105 shadow-lg"
            >
              Request a Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
