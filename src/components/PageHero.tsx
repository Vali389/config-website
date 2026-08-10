import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  image?: string;
  images?: string[];
  align?: "left" | "center";
  children?: React.ReactNode;
  minHeight?: string;
}

export function PageHero({ eyebrow, title, subtitle, image, images, align = "center", children, minHeight = "min-h-[62vh]" }: Props) {
  const imageList = images && images.length > 0 ? images : (image ? [image] : []);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (imageList.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageList.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [imageList.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % imageList.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + imageList.length) % imageList.length);
  };

  return (
    <section className={`relative ${minHeight} flex items-center overflow-hidden pt-28 pb-16 bg-[#030a16]`}>
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          {imageList.length > 0 && (
            <motion.img
              key={currentIndex}
              src={imageList[currentIndex]}
              alt=""
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 0.95, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 h-full w-full object-cover animate-kenburns"
            />
          )}
        </AnimatePresence>

        {/* Lightened ambient overlays for high image clarity */}
        <div className={`absolute inset-0 ${align === 'center' ? 'bg-gradient-to-t from-[#030a16]/80 via-[#030a16]/40 to-transparent' : 'bg-gradient-to-r from-[#030a16]/85 via-[#030a16]/50 to-transparent'} z-10`} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030a16]/60 via-transparent to-transparent z-10" />

        {/* Drifting premium aurora tech glow blobs */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] opacity-40 animate-drift z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] opacity-30 animate-drift-slow z-10" />
      </div>

      <div
        className={`relative z-20 mx-auto w-full px-4 lg:px-8 ${
          align === "center" ? "text-center max-w-4xl" : "text-left max-w-7xl"
        }`}
      >
        {/* Eyebrow */}
        {eyebrow && (
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-blue-400 mb-5"
          >
            {eyebrow}
          </motion.span>
        )}

        {/* Title: Slide In Left + Fade In */}
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className={`font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-[1.12] tracking-tight ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {title}
        </motion.h1>

        {/* Subtitle: Slide In Up + Fade In */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={`mt-6 text-sm sm:text-base md:text-lg text-white/80 max-w-2xl leading-relaxed text-justify ${
              align === "center" ? "mx-auto text-center" : "text-left"
            }`}
          >
            {subtitle}
          </motion.p>
        )}

        {/* Children (Buttons): Slide In Up + Fade In */}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`mt-10 ${align === 'center' ? 'flex justify-center' : ''}`}
          >
            {children}
          </motion.div>
        )}
      </div>

      {/* Carousel Controls */}
      {imageList.length > 1 && (
        <>
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur hover:bg-white/20 transition-all opacity-80 hover:opacity-100"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur hover:bg-white/20 transition-all opacity-80 hover:opacity-100"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dot Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
            {imageList.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "w-8 bg-blue-500" : "w-2.5 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
