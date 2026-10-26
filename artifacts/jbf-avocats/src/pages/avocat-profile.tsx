import { useEffect } from "react";
import { ArrowUpRight, Linkedin, Globe, BriefcaseBusiness, Scale, UsersRound, ShieldCheck, FileCheck, ChevronLeft, Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";

const profile = {
  name: "Anass Moumen",
  title: "Maître Anass Moumen",
  role: "Avocat au Barreau de Casablanca",
  image: "/anass-moumen.jpg",
  linkedin: "https://www.linkedin.com/in/moumen-a/",
  barreau: "Barreau de Casablanca",
  formation: [
    { degree: "Master 2 · Droit des affaires", school: "Université Hassan II, Casablanca" },
    { degree: "Licence en droit privé", school: "Faculté de Droit, Casablanca" },
  ],
  langues: ["Français", "English", "العربية"],
  domaines: [
    { label: "Pré-contentieux", icon: ShieldCheck },
    { label: "Droit des affaires", icon: BriefcaseBusiness },
    { label: "Droit social", icon: UsersRound },
    { label: "Relations de travail", icon: FileCheck },
    { label: "Gestion des litiges", icon: Scale },
    { label: "Conseil stratégique", icon: ArrowUpRight },
  ],
  bio: [
    "Founded in 2020, Moumen Avocats is a dynamic law firm based in Casablanca dedicated to providing high-quality legal services to businesses. With a team of skilled professionals, we work closely with our clients to address their legal needs and ensure effective solutions.",
    "Our firm is committed to supporting businesses through various challenges, helping them navigate the complexities of the corporate world with confidence.",
    "As a local market player, we maintain strong connections to small and medium-sized Moroccan enterprises and are deeply committed to assisting their business development.",
  ],
  experiences: [
    { firm: "BRAHMA AVOCATS", label: "Expérience professionnelle" },
    { firm: "BENZEKRI LAW FIRM", label: "Expérience professionnelle" },
    { firm: "Cabinet Maîtres BENAMMAR", label: "Expérience professionnelle" },
  ],
};

export default function AvocatProfile() {
  const [, navigate] = useLocation();

  useEffect(() => {
    // Scroll to top when opening the profile page
    window.scrollTo(0, 0);
  }, []);

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    // If there's history, use native back to trigger browser's scroll restoration
    if (window.history.length > 2) {
      window.history.back();
    } else {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      {/* Top bar */}
      <div className="bg-[hsl(var(--primary))] px-4 py-2 text-[hsl(var(--primary-foreground))]">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3 text-[.62rem] font-semibold uppercase tracking-[.13em] sm:text-[.68rem]">
          <span className="flex items-center gap-2"><span className="inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--accent))]" /> Avocat au Barreau de Casablanca</span>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-[hsl(var(--border))] bg-[hsl(var(--background)/.94)] backdrop-blur-sm sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-6 flex min-h-[72px] items-center justify-between gap-5">
          <a href="/" onClick={handleBack} className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.12em] text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors">
            <ChevronLeft className="h-4 w-4" /> Retour au cabinet
          </a>
          <a href="#contact-profile" className="border border-[hsl(var(--primary))] px-5 py-3 text-[.66rem] font-bold uppercase tracking-[.13em] text-[hsl(var(--primary))] transition-colors hover:bg-[hsl(var(--primary))] hover:text-[hsl(var(--primary-foreground))]">
            Prendre rendez-vous
          </a>
        </div>
      </header>

      <main>
        {/* Hero section */}
        <section className="border-b border-[hsl(var(--border))]">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
            <div className="grid md:grid-cols-[380px_1fr] gap-12 lg:gap-20 items-start">
              {/* Photo */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={profile.image}
                    alt={profile.title}
                    className="w-full object-cover"
                    style={{ aspectRatio: "3/4" }}
                  />
                  {/* Accent border */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[hsl(var(--accent))]" />
                </div>
                {/* Social links below photo */}
                <div className="mt-4 flex items-center gap-3">
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.12em] text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors border border-[hsl(var(--border))] px-4 py-2.5">
                    <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                  </a>
                </div>
              </motion.div>

              {/* Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <p className="text-[.62rem] font-bold uppercase tracking-[.18em] text-[hsl(var(--accent))] mb-4">
                  L&apos;équipe
                </p>
                <h1 className="jbf-serif text-5xl md:text-6xl lg:text-7xl leading-[.9] tracking-tight mb-5">
                  {profile.title}
                </h1>
                <p className="text-lg text-[hsl(var(--muted-foreground))] mb-8">
                  {profile.role}
                </p>

                {/* Domaines chips */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {profile.domaines.map((d) => (
                    <span key={d.label} className="inline-flex items-center gap-1.5 border border-[hsl(var(--border))] px-3 py-1.5 text-[.68rem] font-semibold uppercase tracking-[.1em] text-[hsl(var(--muted-foreground))]">
                      <d.icon className="h-3 w-3" />
                      {d.label}
                    </span>
                  ))}
                </div>

                {/* Key facts */}
                <dl className="grid grid-cols-1 sm:grid-cols-3 border-t border-[hsl(var(--border))] pt-7 gap-y-6">
                  <div>
                    <dt className="text-[.6rem] uppercase tracking-[.15em] text-[hsl(var(--muted-foreground))] mb-1.5">Barreau</dt>
                    <dd className="text-sm font-semibold">{profile.barreau}</dd>
                  </div>
                  <div>
                    <dt className="text-[.6rem] uppercase tracking-[.15em] text-[hsl(var(--muted-foreground))] mb-1.5">Formation</dt>
                    {profile.formation.map((f) => (
                      <dd key={f.degree} className="text-sm font-semibold leading-snug">
                        {f.degree}
                        <span className="block text-xs text-[hsl(var(--muted-foreground))] font-normal mt-0.5">{f.school}</span>
                      </dd>
                    ))}
                  </div>
                  <div>
                    <dt className="text-[.6rem] uppercase tracking-[.15em] text-[hsl(var(--muted-foreground))] mb-1.5">Langues</dt>
                    <dd className="flex flex-wrap gap-1">
                      {profile.langues.map((l) => (
                        <span key={l} className="text-sm font-semibold">{l}</span>
                      ))}
                    </dd>
                  </div>
                </dl>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Bio section */}
        <section className="border-b border-[hsl(var(--border))]">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
            <div className="grid md:grid-cols-[.65fr_1.35fr] gap-12">
              <p className="text-[.62rem] font-bold uppercase tracking-[.18em] text-[hsl(var(--accent))] pt-1">
                En quelques mots
              </p>
              <div className="space-y-5">
                {profile.bio.map((para, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="text-base leading-7 text-[hsl(var(--muted-foreground))]"
                  >
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experiences section */}
        <section className="border-b border-[hsl(var(--border))]">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
            <div className="grid md:grid-cols-[.65fr_1.35fr] gap-12">
              <p className="text-[.62rem] font-bold uppercase tracking-[.18em] text-[hsl(var(--accent))] pt-1">
                Expériences
              </p>
              <div className="border-t border-[hsl(var(--border))]">
                {profile.experiences.map((exp, index) => (
                  <motion.div
                    key={exp.firm}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center justify-between border-b border-[hsl(var(--border))] py-7"
                  >
                    <div>
                      <p className="text-[.62rem] font-bold uppercase tracking-[.15em] text-[hsl(var(--accent))] mb-1">{exp.label}</p>
                      <h3 className="jbf-serif text-3xl sm:text-4xl">{exp.firm}</h3>
                    </div>
                    <span className="font-mono text-xs text-[hsl(var(--muted-foreground))]">0{index + 1}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA / Contact section */}
        <section id="contact-profile" className="bg-[hsl(var(--foreground))] text-[hsl(var(--background))] py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-[1.1fr_.9fr] gap-16 md:gap-24 items-start">
              <div>
                <p className="text-[.62rem] font-bold uppercase tracking-[.18em] text-[hsl(var(--accent))] mb-6">Prendre contact</p>
                <h2 className="jbf-serif text-6xl md:text-8xl leading-[.88]">
                  Commencer par<br /><em className="text-[hsl(var(--accent))]">se parler.</em>
                </h2>
                <p className="mt-7 max-w-md text-base leading-7 text-[hsl(var(--background)/.62)]">
                  Pour une première prise de contact confidentielle. Casablanca et échanges à distance, sur rendez-vous.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#contact-profile" className="inline-flex items-center gap-3 border border-[hsl(var(--background)/.3)] px-5 py-4 text-xs font-bold uppercase tracking-[.11em] transition-colors hover:bg-[hsl(var(--background))] hover:text-[hsl(var(--foreground))]">
                    <MessageCircle className="h-4 w-4" /> Demander un échange
                  </a>
                  <a href="https://wa.me/?text=Bonjour%20Ma%C3%AEtre%20Moumen" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-[hsl(var(--accent))] px-5 py-4 text-xs font-bold uppercase tracking-[.11em] text-[hsl(var(--accent-foreground))]">
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                </div>
              </div>
              <div className="border-t border-[hsl(var(--background)/.25)] pt-7">
                <p className="text-[.62rem] font-bold uppercase tracking-[.15em] text-[hsl(var(--background)/.55)] mb-6">Coordonnées</p>
                <div className="space-y-5">
                  <div className="flex items-start justify-between border-b border-[hsl(var(--background)/.2)] pb-5">
                    <div>
                      <p className="text-xs text-[hsl(var(--background)/.5)] mb-1">Barreau</p>
                      <p className="font-semibold">Barreau de Casablanca</p>
                    </div>
                  </div>
                  <div className="flex items-start justify-between border-b border-[hsl(var(--background)/.2)] pb-5">
                    <div>
                      <p className="text-xs text-[hsl(var(--background)/.5)] mb-1">Langues de travail</p>
                      <p className="font-semibold">Français · English · العربية</p>
                    </div>
                  </div>
                  <a href="mailto:contactma@moumen-avocats.com" className="flex items-center gap-3 border-b border-[hsl(var(--background)/.2)] pb-5 hover:opacity-80 transition-opacity">
                    <Mail className="h-4 w-4 opacity-50" />
                    <span className="text-sm text-[hsl(var(--background)/.75)]">contactma@moumen-avocats.com</span>
                  </a>
                  <a href="mailto:a.moumen@moumen-avocats.com" className="flex items-center gap-3 border-b border-[hsl(var(--background)/.2)] pb-5 hover:opacity-80 transition-opacity">
                    <Mail className="h-4 w-4 opacity-50" />
                    <span className="text-sm text-[hsl(var(--background)/.75)]">a.moumen@moumen-avocats.com</span>
                  </a>
                  <a href="tel:+21252134800" className="flex items-center gap-3 border-b border-[hsl(var(--background)/.2)] pb-5 hover:opacity-80 transition-opacity">
                    <span className="text-sm text-[hsl(var(--background)/.75)]">(+212) 5 21 34 08 00</span>
                  </a>
                  <a href="https://www.moumen-avocats.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 border-b border-[hsl(var(--background)/.2)] pb-5 hover:opacity-80 transition-opacity">
                    <span className="text-sm text-[hsl(var(--background)/.75)]">www.moumen-avocats.com</span>
                  </a>
                  <div className="text-sm leading-6 text-[hsl(var(--background)/.62)]">
                    12, Rue d&apos;Amman, Clara Office Business,<br />
                    2<sup>ème</sup> étage, n°21, Casablanca, 20250
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
