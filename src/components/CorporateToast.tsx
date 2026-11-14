import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, X } from "lucide-react";

interface CorporateToastProps {
  show: boolean;
  title: string;
  message: string;
  onDismiss: () => void;
  durationMs?: number;
}

export function CorporateToast({
  show,
  title,
  message,
  onDismiss,
  durationMs = 6000,
}: CorporateToastProps) {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (!show) {
      setProgress(100);
      return;
    }

    const intervalTime = 50;
    const step = (intervalTime / durationMs) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev <= step) {
          clearInterval(timer);
          onDismiss();
          return 0;
        }
        return prev - step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [show, durationMs, onDismiss]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 380, damping: 26 }}
          className="fixed top-6 inset-x-4 max-w-lg mx-auto z-[9999] pointer-events-auto"
        >
          <div className="rounded-2xl bg-white border border-slate-200/90 shadow-[0_20px_50px_rgba(16,43,78,0.22)] overflow-hidden">
            {/* Top Blue-Red Brand Stripe */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#102B4E] via-[#245B91] to-[#C83B43]" />

            <div className="p-4 sm:p-5 flex items-start gap-4">
              {/* Dual Brand Icon Badge: Deep Navy background with Crimson Check */}
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#102B4E] text-[#C83B43] shadow-sm ring-2 ring-[#C83B43]/20">
                <CheckCircle2 className="h-6 w-6 stroke-[2.2]" />
              </div>

              {/* Message Content */}
              <div className="flex-1 min-w-0 pr-1">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#C83B43]">
                    Confirmed
                  </span>
                  <span className="h-1 w-1 rounded-full bg-slate-300" />
                  <span className="text-[11px] font-semibold text-slate-500">
                    ConfigUSA Enterprise
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-extrabold text-[#102B4E] tracking-tight">
                  {title}
                </h4>
                <p className="text-xs sm:text-[13px] text-slate-600 mt-1 leading-relaxed">
                  {message}
                </p>
              </div>

              {/* Dismiss Button */}
              <button
                type="button"
                onClick={onDismiss}
                className="text-slate-400 hover:text-[#C83B43] hover:bg-red-50 p-1.5 rounded-lg transition-colors shrink-0 cursor-pointer"
                aria-label="Dismiss notification"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Bottom Animated Progress Countdown Line */}
            <div className="h-1 w-full bg-slate-100 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#102B4E] via-[#245B91] to-[#C83B43] transition-all duration-75 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
