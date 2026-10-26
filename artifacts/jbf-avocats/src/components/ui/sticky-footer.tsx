import React from "react";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import { Linkedin, MessageCircle, ArrowUpRight, Mail, ChevronRight } from "lucide-react";

type StickyFooterProps = React.ComponentProps<"footer">;

const gold = "#B8963E";
const white = "#FFFFFF";

function AMEmblem({ size = 50 }: { size?: number }) {
  const white = "#FFFFFF";
  return (
    <svg width={size} height={size * 0.75} viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <text x="64" y="70" fontFamily="Georgia, 'Times New Roman', serif" fontSize="76" fontWeight="400" fill={white} textAnchor="end">A</text>
      <text x="56" y="70" fontFamily="Georgia, 'Times New Roman', serif" fontSize="76" fontWeight="400" fill={white} textAnchor="start">M</text>
    </svg>
  );
}

const navLinks = [
  {
    label: "Le cabinet", links: [
      { title: "Accueil", href: "#accueil" },
      { title: "Parcours professionnel", href: "#equipe" },
      { title: "Domaines d'intervention", href: "#domaines" },
      { title: "Repères", href: "#articles" },
    ]
  },
  {
    label: "Domaines", links: [
      { title: "Pré-contentieux", href: "#domaines" },
      { title: "Droit des affaires", href: "#domaines" },
      { title: "Droit social", href: "#domaines" },
      { title: "Relations de travail", href: "#domaines" },
      { title: "Gestion des litiges", href: "#domaines" },
      { title: "Conseil stratégique", href: "#domaines" },
    ]
  },
  {
    label: "Contact", links: [
      { title: "Prendre rendez-vous", href: "#contact" },
      { title: "WhatsApp", href: "https://wa.me/?text=Bonjour%20Ma%C3%AEtre%20Moumen" },
      { title: "Barreau de Casablanca", href: "#" },
      { title: "Mentions légales", href: "#" },
      { title: "Confidentialité", href: "#" },
    ]
  },
];

export function StickyFooter({ className, ...props }: StickyFooterProps) {
  return (
    <footer
      id="contact"
      className={cn("relative w-full", className)}
      style={{
        background: "hsl(var(--foreground))",
        color: "hsl(var(--background))",
        clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
      }}
      {...props}
    >
      {/* Ambient glow accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-20 h-96 w-96 rounded-full opacity-[0.07]"
          style={{ background: `radial-gradient(circle, ${gold} 0%, transparent 70%)` }} />
        <div className="absolute top-1/2 right-0 h-72 w-72 rounded-full opacity-[0.04]"
          style={{ background: `radial-gradient(circle, ${gold} 0%, transparent 70%)` }} />
      </div>

      {/* HERO CONTACT BLOCK */}
      <div className="relative z-10 jbf-container py-20 sm:py-28 border-b" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
        <div className="grid gap-16 lg:grid-cols-[1.1fr_.9fr] lg:gap-24">
          {/* Left: CTA */}
          <AnimatedFade>
            {/* Wordmark */}
            <div className="flex items-center gap-3 mb-8">
              <AMEmblem size={46} />
              <div className="flex flex-col" style={{ gap: '2px' }}>
                <span className="font-normal tracking-[.25em] text-[.95rem] leading-none"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: white }}>
                  ANASS MOUMEN
                </span>
                <span className="text-[.5rem] font-medium uppercase tracking-[.35em] leading-none"
                  style={{ color: "rgba(255,255,255,0.7)" }}>
                  Avocat à la Cour
                </span>
              </div>
            </div>

            <p className="text-[.6rem] font-bold uppercase tracking-[.18em] mb-5"
              style={{ color: "rgba(255,255,255,0.4)", letterSpacing: "0.18em" }}>
              Prendre rendez-vous
            </p>
            <h2 className="jbf-serif max-w-xl text-6xl leading-[.88] sm:text-7xl" style={{ color: white }}>
              Commencer par<br /><em style={{ color: gold }}>se parler.</em>
            </h2>
            <p className="mt-8 max-w-md text-base leading-7" style={{ color: "rgba(255,255,255,0.55)" }}>
              Pour une première prise de contact confidentielle, écrivez ou laissez vos coordonnées.
              Casablanca et échanges à distance, sur rendez-vous.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#contact"
                className="inline-flex items-center gap-3 border px-5 py-4 text-xs font-bold uppercase tracking-[.11em] transition-colors hover:bg-white/10"
                style={{ borderColor: "rgba(255,255,255,0.3)", color: white }}>
                <MessageCircle className="h-4 w-4" /> Demander un échange
              </a>
              <a href="https://wa.me/?text=Bonjour%20Ma%C3%AEtre%20Moumen%2C%20je%20souhaite%20un%20premier%20%C3%A9change."
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-3 px-5 py-4 text-xs font-bold uppercase tracking-[.11em] transition-opacity hover:opacity-90"
                style={{ background: gold, color: "hsl(var(--foreground))" }}>
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </AnimatedFade>

          {/* Right: Coords */}
          <AnimatedFade delay={0.12}>
            <div className="border-t pt-7" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
              <p className="text-[.6rem] font-bold uppercase tracking-[.18em] mb-6"
                style={{ color: "rgba(255,255,255,0.4)" }}>
                Coordonnées
              </p>
              <div className="space-y-6">
                <a href="mailto:contactma@moumen-avocats.com"
                  className="group flex items-center justify-between border-b pb-5 text-xl transition-colors hover:opacity-80"
                  style={{ borderColor: "rgba(255,255,255,0.15)", color: white }}>
                  <span>contactma@moumen-avocats.com</span>
                  <Mail className="h-5 w-5 opacity-40" />
                </a>
                <a href="mailto:a.moumen@moumen-avocats.com"
                  className="group flex items-center justify-between border-b pb-5 text-sm leading-6 transition-colors hover:opacity-80"
                  style={{ borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.75)" }}>
                  <span>a.moumen@moumen-avocats.com</span>
                  <Mail className="h-4 w-4 opacity-40" />
                </a>
                <a href="tel:+21252134800"
                  className="group flex items-center justify-between border-b pb-5 text-sm leading-6 transition-colors hover:opacity-80"
                  style={{ borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.75)" }}>
                  <span>(+212) 5 21 34 08 00</span>
                  <ChevronRight className="h-5 w-5 opacity-40" />
                </a>
                <a href="https://www.moumen-avocats.com" target="_blank" rel="noreferrer"
                  className="group flex items-center justify-between border-b pb-5 text-sm leading-6 transition-colors hover:opacity-80"
                  style={{ borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.75)" }}>
                  <span>www.moumen-avocats.com</span>
                  <ChevronRight className="h-5 w-5 opacity-40" />
                </a>
                <div className="flex items-start justify-between">
                  <span className="text-sm leading-6" style={{ color: "rgba(255,255,255,0.55)" }}>
                    12, Rue d&apos;Amman, Clara Office Business,<br />
                    2<sup>ème</sup> étage, n°21, Casablanca, 20250
                  </span>
                  <span className="mt-2 h-2 w-2 rounded-full flex-shrink-0" style={{ background: gold }} />
                </div>
              </div>
            </div>
          </AnimatedFade>
        </div>
      </div>

      {/* FOOTER NAV BLOCK */}
      <div className="relative z-10 jbf-container py-14">
        <div className="flex flex-col gap-12 md:flex-row md:gap-0">
          {/* Brand column */}
          <AnimatedFade delay={0.05} className="w-full max-w-xs shrink-0 md:pr-16">
            <p className="text-sm leading-6 mb-6" style={{ color: "rgba(255,255,255,0.45)" }}>
              Cabinet d&apos;avocat à Casablanca. Droit des affaires et droit social.
              Une pratique rigoureuse, au service de vos décisions.
            </p>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/in/moumen-a/" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 border px-3 py-1.5 text-[.65rem] font-bold uppercase tracking-[.12em] transition-colors hover:bg-white/10"
                style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.6)" }}>
                <Linkedin className="h-3 w-3" /> LinkedIn
              </a>
              <a href="https://wa.me/?text=Bonjour%20Ma%C3%AEtre%20Moumen" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 border px-3 py-1.5 text-[.65rem] font-bold uppercase tracking-[.12em] transition-colors hover:bg-white/10"
                style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.6)" }}>
                <MessageCircle className="h-3 w-3" /> WhatsApp
              </a>
            </div>
          </AnimatedFade>

          {/* Divider */}
          <div className="hidden md:block w-px shrink-0 self-stretch opacity-10" style={{ background: white }} />

          {/* Link groups */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:pl-16 w-full">
            {navLinks.map((group, i) => (
              <AnimatedFade key={group.label} delay={0.1 + i * 0.08}>
                <p className="text-[.58rem] font-bold uppercase tracking-[.2em] mb-4" style={{ color: gold }}>
                  {group.label}
                </p>
                <ul className="space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.title}>
                      <a href={link.href}
                        className="group inline-flex items-center gap-1 text-[.75rem] leading-snug transition-colors hover:text-white"
                        style={{ color: "rgba(255,255,255,0.5)" }}>
                        {link.title}
                        <ArrowUpRight className="h-2.5 w-2.5 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-60 transition-all" />
                      </a>
                    </li>
                  ))}
                </ul>
              </AnimatedFade>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="relative z-10 jbf-container border-t pb-8 pt-5 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center"
        style={{ borderColor: "rgba(255,255,255,0.1)" }}>
        <p className="text-[.6rem] font-medium" style={{ color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em" }}>
          © {new Date().getFullYear()} Anass Moumen · Avocat au Barreau de Casablanca
        </p>
        <div className="flex gap-5">
          {["Mentions légales", "Confidentialité"].map((item) => (
            <a key={item} href="#"
              className="text-[.6rem] font-semibold uppercase tracking-[.12em] transition-colors hover:text-white"
              style={{ color: "rgba(255,255,255,0.3)" }}>
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

type AnimatedFadeProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

function AnimatedFade({ delay = 0.05, children, className }: AnimatedFadeProps) {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) return <div className={className}>{children}</div>;
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
