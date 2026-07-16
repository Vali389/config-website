import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface Props {
  image: string;
  title: string;
  eyebrow: string;
  description: string;
  to: string;
  popular?: boolean;
  delay?: number;
  features?: string[];
}

export function ServiceCard({ image, title, eyebrow, description, to, popular, delay = 0 }: Props) {
  return (
    <Link to={to as any} className="block text-left h-full">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
        whileHover={{ y: -6 }}
        className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-border/60 shadow-card hover:shadow-[0_20px_40px_rgba(29,78,216,0.1)] hover:border-brand/20 transition-all duration-400 relative"
      >
        {/* Shine Top Edge Bar */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
        
        {/* Image wrapper with dark gradient overlay and heading text overlay */}
        <div className="relative h-56 overflow-hidden shrink-0">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Dark bottom overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent z-10" />
          
          {/* Title - serif style overlaying the image */}
          <div className="absolute bottom-4 left-4 right-4 z-10">
            <h3 className="font-serif text-lg md:text-xl font-bold text-white leading-snug group-hover:text-[#60a5fa] transition-colors">
              {title}
            </h3>
          </div>

          {popular && (
            <span className="absolute top-3 left-3 rounded-full bg-brand px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-white shadow-sm z-20">
              Popular
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6 pt-5">
          {/* Eyebrow — colored accent */}
          <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-brand mb-3 leading-tight">
            {eyebrow}
          </p>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-3">
            {description}
          </p>

          {/* Link */}
          <div className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-brand group-hover:text-[#60a5fa] transition-colors">
            Explore Service
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
