import { type FormEvent, type ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Clock3,
  FileText,
  Gavel,
  Instagram,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  Scale,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter, useLocation } from 'wouter';

const queryClient = new QueryClient();

const navigation = [
  { href: '#cabinet', label: 'Le cabinet' },
  { href: '#domaines', label: 'Nos domaines' },
  { href: '#equipe', label: 'L’équipe' },
  { href: '#articles', label: 'Articles' },
];

const practices = [
  { title: 'Urgence pénale', text: 'Garde à vue, défèrement ou comparution immédiate : nous intervenons dès les premières heures.', icon: Clock3 },
  { title: 'Droit pénal général', text: 'Une défense construite, de l’enquête au jugement, devant toutes les juridictions répressives.', icon: Gavel },
  { title: 'Effacement de casier judiciaire', text: 'Retrouver une liberté professionnelle et personnelle en préparant chaque démarche avec précision.', icon: FileText },
  { title: 'Violences conjugales et intrafamiliales', text: 'Protéger, écouter et agir aux côtés des victimes de violences domestiques, sexistes et sexuelles.', icon: ShieldCheck },
  { title: 'Droit de la famille', text: 'Divorce, séparation, autorité parentale : des décisions justes pour les moments qui changent une vie.', icon: Scale },
  { title: 'Contentieux pénitentiaire', text: 'Défendre les droits des personnes détenues et faire entendre leur situation avec rigueur.', icon: MessageCircle },
];

const commitments = [
  { number: '01', title: 'Confiance', text: 'Une parole claire, sans détour, pour décider avec vous.' },
  { number: '02', title: 'Réactivité', text: 'Chaque minute compte. Nous répondons présents quand la situation l’exige.' },
  { number: '03', title: 'Disponibilité', text: 'Un interlocuteur identifié, avant, pendant et après l’audience.' },
  { number: '04', title: 'Confidentialité', text: 'Votre histoire reste à sa place : dans un échange sûr et protégé.' },
];

const articles = [
  { tag: 'Droit pénal', date: '12.06.2024', title: 'Garde à vue : les réflexes essentiels dès la première heure' },
  { tag: 'Droit de la famille', date: '27.05.2024', title: 'Séparation et enfants : remettre l’intérêt de l’enfant au centre' },
  { tag: 'Vie du cabinet', date: '04.04.2024', title: 'Comprendre, défendre, avancer : notre manière de vous accompagner' },
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#accueil" className={`flex items-center gap-3 ${light ? 'text-[hsl(var(--background))]' : 'text-[hsl(var(--foreground))]'}`} data-testid="link-logo">
      <span className="flex h-9 w-9 items-center justify-center border border-current/50">
        <svg viewBox="0 0 40 40" aria-label="JBF monogramme" className="h-7 w-7 fill-none stroke-current" strokeWidth="1.4">
          <path d="M11 8v17c0 4 2.1 7 6 7 3.6 0 5.2-2.2 5.2-5.8V8M22 8h5.3c3.7 0 5.5 1.8 5.5 4.4 0 2.2-1.4 3.8-3.9 4.4 3 .5 4.8 2.2 4.8 4.8 0 3.3-2.2 5.3-6.5 5.3H22" />
          <path d="M9 33h23" />
        </svg>
      </span>
      <span className="font-sans text-[.68rem] font-bold leading-tight tracking-[.28em]">
        JBF <span className="font-normal tracking-[.14em]">| AVOCATS</span>
      </span>
    </a>
  );
}

function SectionHeading({ kicker, title, children }: { kicker: string; title: ReactNode; children?: ReactNode }) {
  return (
    <div className="grid gap-5 md:grid-cols-[.65fr_1.35fr] md:gap-12">
      <p className="jbf-eyebrow pt-2" data-testid={`text-kicker-${kicker.toLowerCase().replaceAll(' ', '-')}`}>{kicker}</p>
      <div>
        <h2 className="jbf-serif max-w-3xl text-4xl leading-[.98] text-[hsl(var(--foreground))] sm:text-5xl md:text-6xl">{title}</h2>
        {children}
      </div>
    </div>
  );
}

function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [callbackSent, setCallbackSent] = useState(false);
  const [callbackName, setCallbackName] = useState('');
  const [callbackPhone, setCallbackPhone] = useState('');
  const [callbackMessage, setCallbackMessage] = useState('');
  const [cookiesVisible, setCookiesVisible] = useState(true);

  const submitCallback = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCallbackSent(true);
  };

  return (
    <div className="jbf-page">
      <div className="bg-[hsl(var(--foreground))] px-4 py-2 text-[hsl(var(--background))]">
        <div className="jbf-container flex items-center justify-between gap-3 text-[.62rem] font-semibold uppercase tracking-[.13em] sm:text-[.68rem]">
          <span className="flex items-center gap-2"><span className="inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--accent))]" /> Urgence pénale — disponible 24h/24, 7j/7</span>
          <a href="tel:+33184190303" className="hidden items-center gap-2 transition-opacity hover:opacity-70 sm:flex" data-testid="link-emergency-phone"><Phone className="h-3.5 w-3.5" /> 01 84 19 03 03</a>
        </div>
      </div>

      <header className="relative z-20 border-b border-[hsl(var(--border))] bg-[hsl(var(--background)/.92)] backdrop-blur-sm">
        <div className="jbf-container flex h-[78px] items-center justify-between">
          <Logo />
          <nav className="hidden items-center gap-8 md:flex" aria-label="Navigation principale">
            {navigation.map((item) => <a key={item.href} href={item.href} className="jbf-link-underline text-[.7rem] font-bold uppercase tracking-[.12em] text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--foreground))]" data-testid={`link-nav-${item.href.slice(1)}`}>{item.label}</a>)}
          </nav>
          <a href="#contact" className="hidden border border-[hsl(var(--primary))] px-5 py-3 text-[.66rem] font-bold uppercase tracking-[.13em] text-[hsl(var(--primary))] transition-colors hover:bg-[hsl(var(--primary))] hover:text-[hsl(var(--primary-foreground))] md:block" data-testid="link-header-contact">Prendre contact</a>
          <button type="button" className="md:hidden" onClick={() => setMobileMenuOpen((open) => !open)} aria-label="Ouvrir le menu" data-testid="button-mobile-menu">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {mobileMenuOpen && (
          <nav className="jbf-container grid gap-1 border-t border-[hsl(var(--border))] py-4 md:hidden" aria-label="Navigation mobile">
            {navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)} className="px-2 py-3 text-sm font-semibold" data-testid={`link-mobile-nav-${item.href.slice(1)}`}>{item.label}</a>)}
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="mt-2 bg-[hsl(var(--primary))] px-4 py-3 text-center text-xs font-bold uppercase tracking-[.13em] text-[hsl(var(--primary-foreground))]" data-testid="link-mobile-contact">Prendre contact</a>
          </nav>
        )}
      </header>

      <main>
        <section id="accueil" className="jbf-grid-lines relative border-b border-[hsl(var(--border))]">
          <div className="jbf-container grid min-h-[690px] items-center gap-14 py-20 lg:grid-cols-[1.1fr_.9fr] lg:gap-20 lg:py-28">
            <div>
              <p className="jbf-eyebrow jbf-reveal" data-testid="text-hero-kicker">Paris 16e · France entière</p>
              <h1 className="jbf-serif jbf-reveal jbf-delay-1 mt-7 max-w-3xl text-[clamp(3.7rem,8vw,7.5rem)] leading-[.83] tracking-[-.035em]">
                Défense pénale,<br /><em className="text-[hsl(var(--primary))]">d’exception.</em>
              </h1>
              <p className="jbf-reveal jbf-delay-2 mt-9 max-w-xl text-base leading-7 text-[hsl(var(--muted-foreground))] sm:text-lg">
                Le cabinet intervient devant toutes les juridictions répressives de France, à tous les stades de la procédure.
                <strong className="font-semibold text-[hsl(var(--foreground))]"> Disponible 24h/24, 7j/7 pour les urgences pénales.</strong>
              </p>
              <div className="jbf-reveal jbf-delay-3 mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
                <a href="#contact" className="inline-flex items-center gap-3 bg-[hsl(var(--accent))] px-6 py-4 text-xs font-bold uppercase tracking-[.12em] text-[hsl(var(--accent-foreground))] transition-transform hover:-translate-y-0.5" data-testid="link-hero-urgent">Être rappelé en urgence <ArrowUpRight className="h-4 w-4" /></a>
                <a href="#cabinet" className="jbf-link-underline text-xs font-bold uppercase tracking-[.12em]" data-testid="link-hero-discover">Découvrir le cabinet <ArrowDownRight className="ml-1 inline h-4 w-4" /></a>
              </div>
              <div className="mt-16 grid max-w-lg grid-cols-3 border-t border-[hsl(var(--border))] pt-5">
                <div><p className="jbf-serif text-3xl">2017</p><p className="mt-1 text-[.63rem] uppercase tracking-[.1em] text-[hsl(var(--muted-foreground))]">Fondé à Paris</p></div>
                <div><p className="jbf-serif text-3xl">24/7</p><p className="mt-1 text-[.63rem] uppercase tracking-[.1em] text-[hsl(var(--muted-foreground))]">Pour l’urgence</p></div>
                <div><p className="jbf-serif text-3xl">2</p><p className="mt-1 text-[.63rem] uppercase tracking-[.1em] text-[hsl(var(--muted-foreground))]">Avocats associés</p></div>
              </div>
            </div>
            <div className="jbf-paper-card relative ml-auto w-full max-w-[470px] p-7 sm:p-10">
              <div className="absolute right-7 top-7 h-9 w-9 rounded-full border border-[hsl(var(--accent)/.35)] bg-[hsl(var(--accent)/.08)]" />
              <div className="relative">
                <p className="jbf-eyebrow text-[hsl(var(--accent))]">Réponse immédiate</p>
                <h2 className="jbf-serif mt-4 text-4xl leading-none">Parlez-nous.<br /><em>Maintenant.</em></h2>
                <p className="mt-5 text-sm leading-6 text-[hsl(var(--muted-foreground))]">Laissez vos coordonnées. Un avocat vous rappelle au plus vite, en toute confidentialité.</p>
                {callbackSent ? (
                  <div className="mt-8 border border-[hsl(var(--primary)/.25)] bg-[hsl(var(--primary)/.06)] p-5" data-testid="status-callback-success">
                    <Check className="h-6 w-6 text-[hsl(var(--primary))]" />
                    <p className="mt-3 font-semibold">Votre demande est bien enregistrée.</p>
                    <p className="mt-1 text-sm leading-5 text-[hsl(var(--muted-foreground))]">Un avocat de JBF Avocats vous contactera très rapidement.</p>
                    <button type="button" onClick={() => setCallbackSent(false)} className="mt-4 text-xs font-bold uppercase tracking-[.1em] underline" data-testid="button-new-callback">Nouvelle demande</button>
                  </div>
                ) : (
                  <form className="mt-8 space-y-4" onSubmit={submitCallback}>
                    <label className="block"><span className="sr-only">Nom</span><input value={callbackName} onChange={(event) => setCallbackName(event.target.value)} required placeholder="Votre nom" className="w-full border-b border-[hsl(var(--border))] bg-transparent px-0 py-3 text-sm outline-none placeholder:text-[hsl(var(--muted-foreground))] focus:border-[hsl(var(--primary))]" data-testid="input-callback-name" /></label>
                    <label className="block"><span className="sr-only">Téléphone</span><input value={callbackPhone} onChange={(event) => setCallbackPhone(event.target.value)} required type="tel" placeholder="Votre téléphone" className="w-full border-b border-[hsl(var(--border))] bg-transparent px-0 py-3 text-sm outline-none placeholder:text-[hsl(var(--muted-foreground))] focus:border-[hsl(var(--primary))]" data-testid="input-callback-phone" /></label>
                    <label className="block"><span className="sr-only">Votre situation</span><textarea value={callbackMessage} onChange={(event) => setCallbackMessage(event.target.value)} required placeholder="En quelques mots, votre situation..." rows={2} className="w-full resize-none border-b border-[hsl(var(--border))] bg-transparent px-0 py-3 text-sm outline-none placeholder:text-[hsl(var(--muted-foreground))] focus:border-[hsl(var(--primary))]" data-testid="input-callback-message" /></label>
                    <button type="submit" className="mt-3 flex w-full items-center justify-between bg-[hsl(var(--primary))] px-5 py-4 text-xs font-bold uppercase tracking-[.12em] text-[hsl(var(--primary-foreground))] transition-colors hover:bg-[hsl(var(--foreground))]" data-testid="button-submit-callback"><span>Demander un rappel</span><ArrowUpRight className="h-4 w-4" /></button>
                    <p className="text-[.64rem] leading-4 text-[hsl(var(--muted-foreground))]">Vos informations sont traitées de manière strictement confidentielle.</p>
                  </form>
                )}
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute bottom-6 right-7 hidden items-center gap-3 text-[.62rem] font-bold uppercase tracking-[.2em] text-[hsl(var(--muted-foreground))] lg:flex"><span className="h-px w-12 bg-[hsl(var(--border))]" /> Faites défiler</div>
        </section>

        <section id="cabinet" className="jbf-container py-24 sm:py-32">
          <SectionHeading kicker="Le cabinet" title={<>Une défense exigeante,<br /><em className="text-[hsl(var(--primary))]">à taille humaine.</em></>}>
            <p className="mt-7 max-w-2xl text-base leading-7 text-[hsl(var(--muted-foreground))]">Fondé en 2017 par Maîtres Julien Bensadoun et David Fridman, JBF Avocats est un cabinet parisien dédié au droit pénal et au droit de la famille. Nous accompagnons celles et ceux qui ont besoin d’une aide calme, immédiate et rigoureuse.</p>
            <a href="#equipe" className="jbf-link-underline mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.12em]" data-testid="link-cabinet-team">Rencontrer nos avocats <ChevronRight className="h-4 w-4" /></a>
          </SectionHeading>
          <div className="mt-24 grid border-y border-[hsl(var(--border))] sm:grid-cols-2 lg:grid-cols-4">
            {commitments.map((commitment, index) => <div key={commitment.title} className={`border-b border-[hsl(var(--border))] py-7 sm:px-7 lg:border-b-0 lg:border-r lg:py-9 ${index === commitments.length - 1 ? 'sm:col-span-2 sm:border-b-0 lg:col-span-1 lg:border-r-0' : ''}`}><span className="font-mono text-[.66rem] text-[hsl(var(--accent))]">{commitment.number}</span><h3 className="jbf-serif mt-8 text-3xl">{commitment.title}</h3><p className="mt-3 max-w-[220px] text-sm leading-6 text-[hsl(var(--muted-foreground))]">{commitment.text}</p></div>)}
          </div>
        </section>

        <section id="domaines" className="bg-[hsl(var(--primary))] py-24 text-[hsl(var(--primary-foreground))] sm:py-32">
          <div className="jbf-container">
            <SectionHeading kicker="Nos domaines" title={<>Une expérience<br /><em className="text-[hsl(var(--accent))]">qui protège.</em></>}>
              <p className="mt-7 max-w-xl text-base leading-7 text-[hsl(var(--primary-foreground)/.7)]">Le bon conseil est celui qui arrive au bon moment. Notre pratique est volontairement resserrée pour vous offrir un accompagnement précis, de la première écoute jusqu’à la dernière décision.</p>
            </SectionHeading>
            <div className="mt-20 grid border-t border-[hsl(var(--primary-foreground)/.2)] sm:grid-cols-2 lg:grid-cols-3">
              {practices.map((practice, index) => { const Icon = practice.icon; return <a href="#contact" key={practice.title} className="group border-b border-[hsl(var(--primary-foreground)/.2)] py-8 sm:px-6 sm:first:pl-0 lg:min-h-[255px] lg:px-8 lg:py-10 lg:nth-[3n+1]:pl-0" data-testid={`link-practice-${index}`}><div className="flex items-start justify-between"><Icon className="h-6 w-6 stroke-[1.25] text-[hsl(var(--accent))]" /><ArrowUpRight className="h-4 w-4 opacity-40 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div><h3 className="jbf-serif mt-12 text-3xl">{practice.title}</h3><p className="mt-3 max-w-xs text-sm leading-6 text-[hsl(var(--primary-foreground)/.62)]">{practice.text}</p></a>; })}
            </div>
          </div>
        </section>

        <section id="equipe" className="jbf-container py-24 sm:py-32">
          <SectionHeading kicker="L’équipe" title={<>Deux regards,<br /><em className="text-[hsl(var(--primary))]">une même exigence.</em></>}>
            <p className="mt-7 max-w-xl text-base leading-7 text-[hsl(var(--muted-foreground))]">Parce qu’une relation de confiance se construit avec des visages et des voix, vous êtes accompagné directement par les associés du cabinet.</p>
          </SectionHeading>
          <div className="mt-20 grid gap-6 md:grid-cols-2">
            {[{ initials: 'JB', name: 'Julien Bensadoun', role: 'Avocat associé · Droit pénal', detail: '« Être utile, c’est rendre les choses lisibles quand tout semble confus. »' }, { initials: 'DF', name: 'David Fridman', role: 'Avocat associé · Droit pénal & famille', detail: '« La rigueur n’exclut jamais l’écoute. Elle en est le prolongement. »' }].map((lawyer) => <article key={lawyer.initials} className="group grid grid-cols-[130px_1fr] gap-6 border-t border-[hsl(var(--border))] pt-7 sm:grid-cols-[190px_1fr] sm:gap-9"><div className="relative flex aspect-[.82] items-end overflow-hidden bg-[hsl(var(--primary))] p-5 text-[hsl(var(--primary-foreground))]"><span className="jbf-serif text-6xl opacity-90">{lawyer.initials}</span><span className="absolute right-4 top-4 h-12 w-12 rounded-full border border-[hsl(var(--accent)/.7)]" /></div><div className="flex flex-col justify-between py-1"><div><p className="jbf-eyebrow">{lawyer.role}</p><h3 className="jbf-serif mt-3 text-3xl sm:text-4xl">{lawyer.name}</h3></div><p className="mt-8 max-w-xs text-sm italic leading-6 text-[hsl(var(--muted-foreground))]">{lawyer.detail}</p><a href="mailto:contact@jbfavocats.fr" className="jbf-link-underline mt-6 w-fit text-xs font-bold uppercase tracking-[.11em]" data-testid={`link-email-${lawyer.initials}`}>Écrire à {lawyer.initials} <ArrowUpRight className="ml-1 inline h-3.5 w-3.5" /></a></div></article>)}
          </div>
        </section>

        <section id="articles" className="jbf-grid-lines border-y border-[hsl(var(--border))] py-24 sm:py-32">
          <div className="jbf-container">
            <SectionHeading kicker="Articles & ressources" title={<>Des réponses<br /><em className="text-[hsl(var(--primary))]">avant les questions.</em></>}>
              <p className="mt-7 max-w-xl text-base leading-7 text-[hsl(var(--muted-foreground))]">Décrypter les procédures, prévenir les erreurs et mieux comprendre vos droits : notre veille est faite pour vous.</p>
            </SectionHeading>
            <div className="mt-20 grid border-t border-[hsl(var(--border))] lg:grid-cols-3">
              {articles.map((article, index) => <a href="#contact" key={article.title} className="group border-b border-[hsl(var(--border))] py-7 lg:border-r lg:px-7 lg:py-8 lg:first:pl-0 lg:last:border-r-0" data-testid={`link-article-${index}`}><div className="flex items-center justify-between"><span className="text-[.65rem] font-bold uppercase tracking-[.12em] text-[hsl(var(--accent))]">{article.tag}</span><span className="text-[.65rem] text-[hsl(var(--muted-foreground))]">{article.date}</span></div><h3 className="jbf-serif mt-12 max-w-sm text-3xl leading-[1.03] transition-colors group-hover:text-[hsl(var(--primary))]">{article.title}</h3><span className="mt-12 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.12em]">Lire l’article <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></span></a>)}
            </div>
            <div className="mt-20 flex flex-wrap items-center gap-x-10 gap-y-5 border-t border-[hsl(var(--border))] pt-6"><span className="jbf-eyebrow">Ils parlent de nous</span><div className="flex flex-wrap items-center gap-x-7 gap-y-3 text-sm font-semibold text-[hsl(var(--muted-foreground))]"><span>Sud Radio</span><span>Le JDD</span><span>RTL</span><span>M6</span><span>Ouest-France</span><span>Le Dauphiné Libéré</span><span>TF1</span></div></div>
          </div>
        </section>

        <section id="contact" className="bg-[hsl(var(--foreground))] py-24 text-[hsl(var(--background))] sm:py-32">
          <div className="jbf-container">
            <div className="grid gap-16 lg:grid-cols-[1.1fr_.9fr] lg:gap-24">
              <div><p className="jbf-eyebrow text-[hsl(var(--background)/.55)]">Nous contacter</p><h2 className="jbf-serif mt-6 max-w-xl text-6xl leading-[.88] sm:text-8xl">Un premier échange<br /><em className="text-[hsl(var(--accent))]">change tout.</em></h2><p className="mt-8 max-w-md text-base leading-7 text-[hsl(var(--background)/.62)]">Cabinet JBF Avocats<br />12, rue de la Pompe · 75116 Paris<br />France entière, sur rendez-vous.</p><div className="mt-10 flex flex-wrap gap-3"><a href="tel:+33184190303" className="inline-flex items-center gap-3 border border-[hsl(var(--background)/.3)] px-5 py-4 text-xs font-bold uppercase tracking-[.11em] transition-colors hover:bg-[hsl(var(--background))] hover:text-[hsl(var(--foreground))]" data-testid="link-contact-phone"><Phone className="h-4 w-4" /> 01 84 19 03 03</a><a href="https://wa.me/33184190303" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-[hsl(var(--accent))] px-5 py-4 text-xs font-bold uppercase tracking-[.11em]" data-testid="link-contact-whatsapp"><MessageCircle className="h-4 w-4" /> WhatsApp</a></div></div>
              <div className="border-t border-[hsl(var(--background)/.25)] pt-7"><p className="jbf-eyebrow text-[hsl(var(--background)/.55)]">Coordonnées directes</p><div className="mt-7 space-y-7"><a href="mailto:contact@jbfavocats.fr" className="group flex items-center justify-between border-b border-[hsl(var(--background)/.2)] pb-5 text-2xl transition-colors hover:text-[hsl(var(--accent))]" data-testid="link-contact-email"><span>contact@jbfavocats.fr</span><Mail className="h-5 w-5 opacity-50" /></a><div className="flex items-start justify-between border-b border-[hsl(var(--background)/.2)] pb-5"><span className="text-sm leading-6 text-[hsl(var(--background)/.62)]">Du lundi au vendredi<br />9h — 19h</span><Clock3 className="h-5 w-5 opacity-50" /></div><div className="flex items-start justify-between"><span className="text-sm leading-6 text-[hsl(var(--background)/.62)]">Urgences pénales<br />24h/24 · 7j/7</span><span className="h-2 w-2 rounded-full bg-[hsl(var(--accent))]" /></div></div></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[hsl(var(--foreground))] px-4 pb-9 text-[hsl(var(--background))]">
        <div className="jbf-container border-t border-[hsl(var(--background)/.2)] pt-7"><div className="flex flex-col items-start justify-between gap-7 sm:flex-row sm:items-center"><Logo light /><div className="flex flex-wrap gap-x-6 gap-y-3 text-[.62rem] font-semibold uppercase tracking-[.12em] text-[hsl(var(--background)/.55)]"><a href="#accueil" className="hover:text-[hsl(var(--background))]" data-testid="link-footer-home">Accueil</a><a href="#contact" className="hover:text-[hsl(var(--background))]" data-testid="link-footer-legal">Mentions légales</a><a href="#contact" className="hover:text-[hsl(var(--background))]" data-testid="link-footer-privacy">Confidentialité</a><a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-[hsl(var(--background))]" data-testid="link-footer-instagram"><Instagram className="h-4 w-4" /></a></div></div><p className="mt-9 text-[.62rem] text-[hsl(var(--background)/.4)]">© 2024 JBF Avocats · Barreau de Paris</p></div>
      </footer>

      {cookiesVisible && <aside className="fixed bottom-4 left-4 z-30 max-w-[360px] border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-5 shadow-xl sm:bottom-6 sm:left-6" data-testid="panel-cookie-consent"><div className="flex items-start justify-between gap-5"><div><p className="text-sm font-semibold">Votre confidentialité compte.</p><p className="mt-2 text-xs leading-5 text-[hsl(var(--muted-foreground))]">Nous utilisons uniquement les cookies nécessaires au bon fonctionnement du site.</p></div><button type="button" onClick={() => setCookiesVisible(false)} aria-label="Fermer le bandeau cookies" className="shrink-0 text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]" data-testid="button-dismiss-cookies"><X className="h-4 w-4" /></button></div><button type="button" onClick={() => setCookiesVisible(false)} className="mt-4 text-[.65rem] font-bold uppercase tracking-[.12em] underline underline-offset-4" data-testid="button-accept-cookies">J’ai compris</button></aside>}
    </div>
  );
}

function Router() {
  return <RoutedErrorBoundary><Switch><Route path="/" component={Home} /><Route component={NotFound} /></Switch></RoutedErrorBoundary>;
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return <QueryClientProvider client={queryClient}><TooltipProvider><WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}><Router /></WouterRouter><Toaster /></TooltipProvider></QueryClientProvider>;
}

export default App;