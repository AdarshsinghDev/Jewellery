"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

export default function NewsletterSection() {
  const [email, setEmail]       = useState("");
  const [submitted, setSubmit]  = useState(false);
  const [err, setErr]           = useState("");

  const handle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErr("Please enter a valid email address.");
      return;
    }
    setErr("");
    setSubmit(true);
  };

  return (
    <section
      className="bg-surface border-t border-tint py-24 md:py-40"
      aria-labelledby="nl-h"
    >
      <div className="max-w-narrow mx-auto px-6 text-center">
        <Reveal>
          <span className="label text-bronze-mid inline-flex items-center gap-3 mb-8">
            <span className="w-5 h-px bg-bronze-warm/40" />
            Correspondence
            <span className="w-5 h-px bg-bronze-warm/40" />
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 id="nl-h"
            className="fluid-heading font-serif italic font-normal text-ink mb-4">
            Letters from<br />the atelier
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="body-copy mb-12">
            Rare dispatches on new collections, process notes,
            and private event invitations.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -8 }}
                onSubmit={handle}
                noValidate
                aria-label="Subscribe to Indo Nordic letters"
              >
                <div className="flex flex-col sm:flex-row items-stretch max-w-md mx-auto border border-tint">
                  <label htmlFor="nl-email" className="sr-only">Email address</label>
                  <input
                    id="nl-email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Your email address"
                    autoComplete="email"
                    aria-describedby={err ? "nl-err" : undefined}
                    className="flex-1 bg-canvas px-5 py-4 font-sans text-sm font-light
                               text-ink placeholder:text-ghost focus:outline-none
                               border-r-0 min-w-0"
                  />
                  <Button type="submit" variant="ink" size="md"
                    aria-label="Subscribe to newsletter"
                    className="border-0 flex-shrink-0">
                    Subscribe
                  </Button>
                </div>
                {err && (
                  <p id="nl-err" role="alert"
                    className="label text-red-700/70 mt-3">{err}</p>
                )}
                <p className="label text-ghost mt-5">
                  No commitments · Unsubscribe at any time
                </p>
              </motion.form>
            ) : (
              <motion.div
                key="done"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16,1,0.3,1] }}
              >
                <div className="rule-bronze w-16 mx-auto mb-6" />
                <p className="font-serif italic text-2xl text-ink/75">
                  Noted. A letter will follow.
                </p>
                <p className="label text-ghost mt-3">— The Indo Nordic Atelier</p>
              </motion.div>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
