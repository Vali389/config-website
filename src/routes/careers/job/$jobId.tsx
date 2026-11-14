import React, { useState, useRef } from "react";
import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  MapPin,
  Clock,
  Building2,
  Briefcase,
  BadgeDollarSign,
  CalendarDays,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Upload,
  FileText,
  Send,
  Sparkles,
} from "lucide-react";
import { getJob, JOBS } from "@/data/jobs";

export const Route = createFileRoute("/careers/job/$jobId")({
  head: ({ params }) => {
    const job = getJob(params.jobId);
    return {
      meta: [
        { title: job ? `Apply for ${job.title} — ConfigUSA Careers` : "Job Not Found — ConfigUSA" },
        { name: "description", content: job?.summary ?? "Explore open roles and apply at ConfigUSA." },
      ],
    };
  },
  component: JobDetailPage,
});

function JobDetailPage() {
  const { jobId } = useParams({ from: "/careers/job/$jobId" });
  const job = getJob(jobId);

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form fields state
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!job) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center px-4 pt-24 bg-white">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#245B91] mb-2">Careers</p>
          <h1 className="text-3xl font-bold text-[#102B4E]">Position Not Available</h1>
          <p className="mt-3 text-slate-500 text-sm">This role may have been filled or the link has changed.</p>
          <Link
            to="/careers"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#102B4E] px-6 py-3 text-sm font-bold text-white hover:bg-[#0c223e] transition-colors shadow-sm"
          >
            <ArrowLeft className="h-4 w-4" /> Back to all open roles
          </Link>
        </div>
      </div>
    );
  }

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = "Full name is required";
    if (!email.trim() && !phone.trim()) {
      errs.email = "Email or phone number is required";
      errs.phone = "Email or phone number is required";
    } else {
      if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
        errs.email = "Please enter a valid work email";
      }
      if (phone.trim() && phone.replace(/[^0-9+]/g, "").length < 7) {
        errs.phone = "Please enter a valid phone number";
      }
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitting(false);
    setSubmitted(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const inputClass = (hasError?: boolean) =>
    `w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-[#102B4E] transition-all outline-none focus:outline-none ${
      hasError
        ? "border-red-500 bg-white focus:border-red-600 shadow-[0_0_0_1px_rgba(239,68,68,0.25)]"
        : "border-slate-300 hover:border-slate-400 focus:border-[#102B4E]"
    }`;

  return (
    <div className="min-h-screen bg-[#F3F5F8]/60">
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 1. Hero Section (Plain Executive Navy Brand Theme - No Blobs)       */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#102B4E] pt-28 pb-12 lg:pt-32 lg:pb-14 text-white border-b border-[#1b3a63]">
        <div className="container-enterprise relative z-10 w-full">
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4" /> Back to All Open Positions
          </Link>

          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#e2e8f0]">
                CAREERS AT CONFIGUSA
              </span>
              <span className="w-10 h-[3px] bg-[#C83B43]" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              {job.title}
            </h1>

            <div className="pt-2 flex flex-wrap items-center gap-2.5 text-xs sm:text-sm text-slate-200">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-[#245B91] px-3 py-1 font-bold text-white">
                <Building2 className="h-3.5 w-3.5" /> {job.department}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-white/10 border border-white/20 px-3 py-1 font-medium">
                <MapPin className="h-3.5 w-3.5 text-slate-300" /> {job.location}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-white/10 border border-white/20 px-3 py-1 font-medium">
                <Clock className="h-3.5 w-3.5 text-slate-300" /> {job.workMode} • {job.type}
              </span>
              {job.experience && (
                <span className="inline-flex items-center gap-1.5 rounded-md bg-white/10 border border-white/20 px-3 py-1 font-medium">
                  <Briefcase className="h-3.5 w-3.5 text-slate-300" /> {job.experience}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 2. Role Details & Job Description (Shown First)                     */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="container-enterprise">
          <div className="max-w-4xl mx-auto space-y-10">
            {/* About the Role */}
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#102B4E]">
                  ABOUT THE ROLE
                </span>
                <span className="w-8 h-[2px] bg-[#C83B43]" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102B4E] tracking-tight mb-4">
                Position Overview
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                {job.summary}
              </p>
            </div>

            {/* What You'll Do */}
            <div className="pt-6 border-t border-slate-100">
              <h3 className="text-lg sm:text-xl font-bold text-[#102B4E] tracking-tight mb-4 flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-[#C83B43]" />
                What You'll Do
              </h3>
              <ul className="space-y-3">
                {job.responsibilities.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#245B91] mt-0.5" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements & Competencies */}
            <div className="pt-6 border-t border-slate-100">
              <h3 className="text-lg sm:text-xl font-bold text-[#102B4E] tracking-tight mb-4 flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-[#C83B43]" />
                Requirements & Competencies
              </h3>
              <ul className="space-y-3">
                {job.requirements.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#245B91] mt-0.5" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nice to Have */}
            {job.niceToHave && job.niceToHave.length > 0 && (
              <div className="pt-6 border-t border-slate-100">
                <h3 className="text-lg sm:text-xl font-bold text-[#102B4E] tracking-tight mb-4 flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-[#C83B43]" />
                  Nice to Have
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {job.niceToHave.map((n) => (
                    <span
                      key={n}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-blue-50 border border-blue-100 px-3.5 py-1.5 text-xs font-semibold text-blue-700"
                    >
                      <Sparkles className="h-3.5 w-3.5 text-[#245B91]" /> {n}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 3. Application Form (Shown Below Role Details)                      */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="apply-form" className="py-12 sm:py-16 bg-[#F3F5F8]">
        <div className="container-enterprise">
          <div className="max-w-4xl mx-auto bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-10 shadow-xs">
            <div className="mb-8 pb-5 border-b border-slate-100">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#102B4E]">
                  APPLICATION FORM
                </span>
                <span className="w-8 h-[2px] bg-[#C83B43]" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102B4E] tracking-tight">
                Apply for this position
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Complete this form to submit your profile directly to our talent acquisition team for {job.title}.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 mx-auto border border-emerald-100">
                  <CheckCircle2 className="h-7 w-7" />
                </span>
                <h3 className="text-xl font-bold text-[#102B4E]">Application Received!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-[#102B4E]">{fullName}</span>. Your application for <span className="font-semibold text-[#102B4E]">{job.title}</span> has been submitted to our recruitment team. We will review your profile and reach out within 1–2 business days.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFullName("");
                    setEmail("");
                    setPhone("");
                    setLocation("");
                    setExperience("");
                    setLinkedIn("");
                    setNotes("");
                    setFileName(null);
                  }}
                  className="btn-cta-secondary inline-flex text-xs font-bold mt-2"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-[#102B4E] uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: "" }));
                      }}
                      onBlur={() => {
                        if (!fullName.trim()) {
                          setErrors((prev) => ({ ...prev, fullName: "Full name is required" }));
                        }
                      }}
                      placeholder="Enter full name"
                      className={inputClass(Boolean(errors.fullName))}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-[#C83B43]">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#102B4E] uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.phone && e.target.value.trim()) {
                          setErrors((prev) => ({ ...prev, phone: "", email: "" }));
                        }
                      }}
                      onBlur={() => {
                        if (!email.trim() && !phone.trim()) {
                          setErrors((prev) => ({ ...prev, email: "Email or phone number is required" }));
                        }
                      }}
                      placeholder="Enter email"
                      className={inputClass(Boolean(errors.email))}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-[#C83B43]">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-[#102B4E] uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.email && e.target.value.trim()) {
                          setErrors((prev) => ({ ...prev, email: "", phone: "" }));
                        }
                      }}
                      onBlur={() => {
                        if (!phone.trim() && !email.trim()) {
                          setErrors((prev) => ({ ...prev, phone: "Email or phone number is required" }));
                        }
                      }}
                      placeholder="Enter phone number"
                      className={inputClass(Boolean(errors.phone))}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-[#C83B43]">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#102B4E] uppercase tracking-wider mb-2">
                      Current Location
                    </label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="City, State / Country"
                      className={inputClass()}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-[#102B4E] uppercase tracking-wider mb-2">
                      Total Experience
                    </label>
                    <input
                      type="text"
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                      placeholder="e.g. 5+ years"
                      className={inputClass()}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#102B4E] uppercase tracking-wider mb-2">
                      LinkedIn / Portfolio URL
                    </label>
                    <input
                      type="url"
                      value={linkedIn}
                      onChange={(e) => setLinkedIn(e.target.value)}
                      placeholder="https://linkedin.com/in/..."
                      className={inputClass()}
                    />
                  </div>
                </div>

                {/* Resume Upload Area */}
                <div>
                  <label className="block text-xs font-bold text-[#102B4E] uppercase tracking-wider mb-2">
                    Upload Resume / CV (PDF, DOCX)
                  </label>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-slate-300 hover:border-[#245B91] hover:bg-blue-50/30 rounded-xl cursor-pointer transition-all bg-slate-50/50 text-center"
                  >
                    {fileName ? (
                      <div className="flex items-center gap-2 text-sm font-semibold text-[#102B4E]">
                        <FileText className="h-5 w-5 text-[#245B91]" />
                        <span>{fileName}</span>
                        <span className="text-xs text-slate-400 font-normal">(Click to replace)</span>
                      </div>
                    ) : (
                      <>
                        <Upload className="h-7 w-7 text-[#245B91] mb-2" />
                        <p className="text-sm font-semibold text-[#102B4E]">
                          Click to browse or drag & drop your resume
                        </p>
                        <p className="text-xs text-slate-400 mt-1">
                          PDF, DOC, DOCX up to 10MB
                        </p>
                      </>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#102B4E] uppercase tracking-wider mb-2">
                    Cover Note / Relevant Qualifications
                  </label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={3}
                    placeholder="Briefly highlight your key technical skills, certifications, and why you are interested in this position..."
                    className={inputClass()}
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-cta-primary inline-flex items-center justify-center gap-2 text-sm font-bold shadow-md cursor-pointer disabled:opacity-70 w-full sm:w-auto"
                  >
                    {submitting ? "Submitting Application..." : `Submit Application for ${job.title}`}
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
