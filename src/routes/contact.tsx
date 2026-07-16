import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Send, MessageSquare } from "lucide-react";
import heroContact from "@/assets/hero-contact-new.png";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact ConfigUSA — Let's Start a Conversation" },
      { name: "description", content: "Get in touch with ConfigUSA. Offices in USA, Canada, and India. We'd love to hear about your project." },
      { property: "og:title", content: "Contact ConfigUSA" },
      { property: "og:description", content: "Talk to our team about IT staffing, software, and SAP solutions." },
    ],
  }),
  component: Page,
});

const OFFICES = [
  { flag: "🇺🇸", country: "USA", city: "New Jersey", addr: "1001 Woodbridge Center Dr, Woodbridge, NJ 07095" },
  { flag: "🇨🇦", country: "Canada", city: "Toronto", addr: "100 King St W, Toronto, ON M5X 1A9" },
  { flag: "🇮🇳", country: "India", city: "Hyderabad", addr: "3rd Floor, Trendz Sapphire, HITEC City, Hyderabad, TS 500081" },
];

function Page() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero eyebrow="Contact Us" title={<>Let's Start a <span className="text-gradient-brand">Conversation.</span></>} subtitle="Have a question, need a proposal, or want to explore a partnership? We'd love to hear from you." image={heroContact} />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 grid lg:grid-cols-2 gap-14">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand mb-3">Get in Touch</p>
            <h2 className="text-4xl font-bold text-ink">We're Here to Help</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">Reach out through the form or contact any of our global offices directly. We respond within one business day.</p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-soft">
                <Phone className="h-5 w-5 text-brand mt-0.5" />
                <div>
                  <div className="font-semibold text-ink">Call Us</div>
                  <a href="tel:+17322202921" className="text-muted-foreground hover:text-brand">+1 (732) 220-2921</a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-soft">
                <Mail className="h-5 w-5 text-brand mt-0.5" />
                <div>
                  <div className="font-semibold text-ink">Email Us</div>
                  <a href="mailto:info@configusa.com" className="text-muted-foreground hover:text-brand">info@configusa.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-soft">
                <MessageSquare className="h-5 w-5 text-brand mt-0.5" />
                <div>
                  <div className="font-semibold text-ink">WhatsApp</div>
                  <a href="https://wa.me/17322202921" className="text-muted-foreground hover:text-brand">Chat with us instantly</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-3xl bg-white p-8 md:p-10 shadow-elegant border border-border/50"
          >
            {sent ? (
              <div className="py-16 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-brand text-white shadow-glow">
                  <Send className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-ink">Message sent!</h3>
                <p className="mt-2 text-muted-foreground">We'll get back to you within one business day.</p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-ink">Send Us a Message</h3>
                <p className="mt-1 text-sm text-muted-foreground">Fill out the form and we'll be in touch shortly.</p>
                <div className="mt-6 grid gap-4">
                  {["Your Name", "Your Email", "Company Name", "Phone Number"].map((p) => (
                    <input key={p} required placeholder={p} type={p.includes("Email") ? "email" : "text"} className="w-full rounded-lg border border-border bg-soft px-4 py-3 text-sm focus:outline-none focus:border-brand focus:bg-white transition-colors" />
                  ))}
                  <textarea required placeholder="Your Message" rows={5} className="w-full rounded-lg border border-border bg-soft px-4 py-3 text-sm focus:outline-none focus:border-brand focus:bg-white transition-colors resize-none" />
                  <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-elegant hover:shadow-glow transition-all">
                    Send Message <Send className="h-4 w-4" />
                  </button>
                </div>
              </>
            )}
          </motion.form>
        </div>
      </section>

      <section className="py-24 bg-soft">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading eyebrow="Global Presence" title="A Global Presence to Serve You Better" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {OFFICES.map((o, i) => (
              <motion.div
                key={o.country}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl bg-white p-7 shadow-card border border-border/50 hover:shadow-elegant transition-shadow"
              >
                <div className="text-4xl">{o.flag}</div>
                <div className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-brand">{o.country}</div>
                <h3 className="mt-1 text-xl font-bold text-ink">{o.city}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex gap-2">
                  <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-brand" />
                  {o.addr}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
