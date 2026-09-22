import { type FormEvent, type ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  FileCheck,
  Languages,
  Mail,
  Menu,
  MessageCircle,
  Scale,
  ShieldCheck,
  UsersRound,
  X,
} from 'lucide-react';
import headerLogoPath from '@assets/1_1790079767821.png';
import monogramPath from '@assets/2_1790079767820.png';
import reversedLogoPath from '@assets/3_1790079767820.png';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter, useLocation } from 'wouter';

const queryClient = new QueryClient();

const navigation = [
  { href: '#cabinet', label: 'Le cabinet' },
  { href: '#domaines', label: 'Domaines' },
  { href: '#equipe', label: 'Parcours' },
  { href: '#articles', label: 'Repères' },
];

const practices = [
  { title: 'Pré-contentieux', text: 'Anticiper un différend, clarifier les positions et créer les conditions d’une issue maîtrisée.', icon: ShieldCheck },
  { title: 'Droit des affaires', text: 'Un conseil attentif aux enjeux juridiques et opérationnels de l’entreprise.', icon: BriefcaseBusiness },
  { title: 'Droit social', text: 'Accompagner les relations de travail avec méthode, de la prévention au litige.', icon: UsersRound },
  { title: 'Relations employeurs / employés', text: 'Sécuriser les décisions et les échanges qui structurent la vie professionnelle.', icon: FileCheck },
  { title: 'Gestion des litiges', text: 'Construire une stratégie lisible lorsque le désaccord devient contentieux.', icon: Scale },
  { title: 'Conseil stratégique', text: 'Mettre le droit au service d’une décision claire, réaliste et défendable.', icon: ArrowUpRight },
];

const commitments = [
  { number: '01', title: 'Clarté', text: 'Un langage direct et des options compréhensibles pour décider sereinement.' },
  { number: '02', title: 'Méthode', text: 'Chaque dossier commence par une lecture précise des faits et des enjeux.' },
  { number: '03', title: 'Mesure', text: 'Une défense ferme, proportionnée et attentive au contexte.' },
  { number: '04', title: 'Confidentialité', text: 'Un premier échange protégé, dans un cadre professionnel et discret.' },
];

const articles = [
  { tag: 'Prévention', title: 'Pré-contentieux : agir avant que le désaccord ne se fige' },
  { tag: 'Droit social', title: 'Relations de travail : remettre les faits au centre' },
  { tag: 'Stratégie', title: 'Un conseil utile commence par les bonnes questions' },
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#accueil" className="jbf-focus flex items-center" data-testid="link-logo">
      <img
        src={light ? reversedLogoPath : headerLogoPath}
        alt="Anass Moumen — Avocat à la Cour"
        className={`jbf-logo ${light ? 'jbf-logo-reversed opacity-95' : ''}`}
      />
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
      <div className="bg-[hsl(var(--primary))] px-4 py-2 text-[hsl(var(--primary-foreground))]">
        <div className="jbf-container flex items-center justify-between gap-3 text-[.62rem] font-semibold uppercase tracking-[.13em] sm:text-[.68rem]">
          <span className="flex items-center gap-2"><span className="inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--accent))]" /> Avocat au Barreau de Casablanca</span>
          <a href="https://www.linkedin.com/in/moumen-a" target="_blank" rel="noreferrer" className="hidden transition-colors hover:text-[hsl(var(--accent))] sm:block" data-testid="link-top-linkedin">Profil professionnel ↗</a>
        </div>
      </div>

      <header className="relative z-20 border-b border-[hsl(var(--border))] bg-[hsl(var(--background)/.94)] backdrop-blur-sm">
        <div className="jbf-container flex min-h-[88px] items-center justify-between gap-5">
          <Logo />
          <nav className="hidden items-center gap-8 md:flex" aria-label="Navigation principale">
            {navigation.map((item) => <a key={item.href} href={item.href} className="jbf-link-underline text-[.7rem] font-bold uppercase tracking-[.12em] text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--foreground))]" data-testid={`link-nav-${item.href.slice(1)}`}>{item.label}</a>)}
          </nav>
          <a href="#contact" className="hidden border border-[hsl(var(--primary))] px-5 py-3 text-[.66rem] font-bold uppercase tracking-[.13em] text-[hsl(var(--primary))] transition-colors hover:bg-[hsl(var(--primary))] hover:text-[hsl(var(--primary-foreground))] md:block" data-testid="link-header-contact">Prendre rendez-vous</a>
          <button type="button" className="jbf-focus md:hidden" onClick={() => setMobileMenuOpen((open) => !open)} aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'} data-testid="button-mobile-menu">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {mobileMenuOpen && (
          <nav className="jbf-container grid gap-1 border-t border-[hsl(var(--border))] py-4 md:hidden" aria-label="Navigation mobile">
            {navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)} className="jbf-focus px-2 py-3 text-sm font-semibold" data-testid={`link-mobile-nav-${item.href.slice(1)}`}>{item.label}</a>)}
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="mt-2 bg-[hsl(var(--primary))] px-4 py-3 text-center text-xs font-bold uppercase tracking-[.13em] text-[hsl(var(--primary-foreground))]" data-testid="link-mobile-contact">Demander un échange</a>
          </nav>
        )}
      </header>

      <main>
        <section id="accueil" className="jbf-grid-lines relative border-b border-[hsl(var(--border))]">
          <div className="jbf-container grid min-h-[690px] items-center gap-14 py-20 lg:grid-cols-[1.1fr_.9fr] lg:gap-20 lg:py-28">
            <div>
              <p className="jbf-eyebrow jbf-reveal" data-testid="text-hero-kicker">Casablanca · Maroc</p>
              <h1 className="jbf-serif jbf-reveal jbf-delay-1 mt-7 max-w-3xl text-[clamp(3.7rem,8vw,7.5rem)] leading-[.83] tracking-[-.035em]">
                Le droit,<br /><em className="text-[hsl(var(--primary))]">en mouvement.</em>
              </h1>
              <p className="jbf-reveal jbf-delay-2 mt-9 max-w-xl text-base leading-7 text-[hsl(var(--muted-foreground))] sm:text-lg">
                Anass Moumen accompagne entreprises, employeurs et salariés en droit des affaires et en droit social.
                <strong className="font-semibold text-[hsl(var(--foreground))]"> Une stratégie pratique, une défense mesurée.</strong>
              </p>
              <div className="jbf-reveal jbf-delay-3 mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
                <a href="#contact" className="inline-flex items-center gap-3 bg-[hsl(var(--accent))] px-6 py-4 text-xs font-bold uppercase tracking-[.12em] text-[hsl(var(--accent-foreground))] transition-transform hover:-translate-y-0.5" data-testid="link-hero-contact">Demander un échange <ArrowUpRight className="h-4 w-4" /></a>
                <a href="#cabinet" className="jbf-link-underline text-xs font-bold uppercase tracking-[.12em]" data-testid="link-hero-discover">Découvrir le cabinet <ArrowDownRight className="ml-1 inline h-4 w-4" /></a>
              </div>
              <div className="mt-16 grid max-w-lg grid-cols-3 border-t border-[hsl(var(--border))] pt-5">
                <div><p className="jbf-serif text-3xl">6</p><p className="mt-1 text-[.63rem] uppercase tracking-[.1em] text-[hsl(var(--muted-foreground))]">Domaines d’intervention</p></div>
                <div><p className="jbf-serif text-3xl">3</p><p className="mt-1 text-[.63rem] uppercase tracking-[.1em] text-[hsl(var(--muted-foreground))]">Langues de travail</p></div>
                <div><p className="jbf-serif text-3xl">1</p><p className="mt-1 text-[.63rem] uppercase tracking-[.1em] text-[hsl(var(--muted-foreground))]">Interlocuteur</p></div>
              </div>
            </div>
            <div className="jbf-paper-card relative ml-auto w-full max-w-[470px] p-7 sm:p-10">
              <div className="absolute right-7 top-7 h-9 w-9 rounded-full border border-[hsl(var(--accent)/.35)] bg-[hsl(var(--accent)/.08)]" />
              <div className="relative">
                <p className="jbf-eyebrow text-[hsl(var(--accent))]">Premier échange</p>
                <h2 className="jbf-serif mt-4 text-4xl leading-none">Poser le cadre.<br /><em>Avancer.</em></h2>
                <p className="mt-5 text-sm leading-6 text-[hsl(var(--muted-foreground))]">Laissez quelques éléments de contexte. Votre demande sera accueillie avec discrétion.</p>
                {callbackSent ? (
                  <div className="mt-8 border border-[hsl(var(--primary)/.25)] bg-[hsl(var(--primary)/.06)] p-5" data-testid="status-callback-success">
                    <Check className="h-6 w-6 text-[hsl(var(--primary))]" />
                    <p className="mt-3 font-semibold">Votre demande est bien enregistrée.</p>
                    <p className="mt-1 text-sm leading-5 text-[hsl(var(--muted-foreground))]">Anass Moumen reviendra vers vous pour convenir d’un premier échange.</p>
                    <button type="button" onClick={() => setCallbackSent(false)} className="mt-4 text-xs font-bold uppercase tracking-[.1em] underline" data-testid="button-new-callback">Nouvelle demande</button>
                  </div>
                ) : (
                  <form className="mt-8 space-y-4" onSubmit={submitCallback}>
                    <label className="block"><span className="sr-only">Nom</span><input value={callbackName} onChange={(event) => setCallbackName(event.target.value)} required placeholder="Votre nom" className="w-full border-b border-[hsl(var(--border))] bg-transparent px-0 py-3 text-sm outline-none placeholder:text-[hsl(var(--muted-foreground))] focus:border-[hsl(var(--primary))]" data-testid="input-callback-name" /></label>
                    <label className="block"><span className="sr-only">Téléphone ou email</span><input value={callbackPhone} onChange={(event) => setCallbackPhone(event.target.value)} required placeholder="Téléphone ou email" className="w-full border-b border-[hsl(var(--border))] bg-transparent px-0 py-3 text-sm outline-none placeholder:text-[hsl(var(--muted-foreground))] focus:border-[hsl(var(--primary))]" data-testid="input-callback-contact" /></label>
                    <label className="block"><span className="sr-only">Votre situation</span><textarea value={callbackMessage} onChange={(event) => setCallbackMessage(event.target.value)} required placeholder="En quelques mots, votre situation..." rows={2} className="w-full resize-none border-b border-[hsl(var(--border))] bg-transparent px-0 py-3 text-sm outline-none placeholder:text-[hsl(var(--muted-foreground))] focus:border-[hsl(var(--primary))]" data-testid="input-callback-message" /></label>
                    <button type="submit" className="mt-3 flex w-full items-center justify-between bg-[hsl(var(--primary))] px-5 py-4 text-xs font-bold uppercase tracking-[.12em] text-[hsl(var(--primary-foreground))] transition-colors hover:bg-[hsl(var(--foreground))]" data-testid="button-submit-callback"><span>Demander un rappel</span><ArrowUpRight className="h-4 w-4" /></button>
                    <p className="text-[.64rem] leading-4 text-[hsl(var(--muted-foreground))]">Les informations partagées sont destinées à ce premier échange et traitées avec confidentialité.</p>
                  </form>
                )}
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute bottom-6 right-7 hidden items-center gap-3 text-[.62rem] font-bold uppercase tracking-[.2em] text-[hsl(var(--muted-foreground))] lg:flex"><span className="h-px w-12 bg-[hsl(var(--border))]" /> Faites défiler</div>
        </section>

        <section id="cabinet" className="jbf-container py-24 sm:py-32">
          <SectionHeading kicker="Le cabinet" title={<>Une pratique engagée,<br /><em className="text-[hsl(var(--primary))]">à taille humaine.</em></>}>
            <p className="mt-7 max-w-2xl text-base leading-7 text-[hsl(var(--muted-foreground))]">Anass Moumen est Avocat au Barreau de Casablanca. Sa pratique s’inscrit dans une approche concrète du droit des affaires et du droit social : comprendre la situation, mesurer les risques et construire une réponse qui puisse être mise en œuvre.</p>
            <a href="#equipe" className="jbf-link-underline mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.12em]" data-testid="link-cabinet-journey">Voir le parcours <ChevronRight className="h-4 w-4" /></a>
          </SectionHeading>
          <div className="mt-24 grid border-y border-[hsl(var(--border))] sm:grid-cols-2 lg:grid-cols-4">
            {commitments.map((commitment, index) => <div key={commitment.title} className={`border-b border-[hsl(var(--border))] py-7 sm:px-7 lg:border-b-0 lg:border-r lg:py-9 ${index === commitments.length - 1 ? 'sm:col-span-2 sm:border-b-0 lg:col-span-1 lg:border-r-0' : ''}`}><span className="font-mono text-[.66rem] text-[hsl(var(--accent))]">{commitment.number}</span><h3 className="jbf-serif mt-8 text-3xl">{commitment.title}</h3><p className="mt-3 max-w-[220px] text-sm leading-6 text-[hsl(var(--muted-foreground))]">{commitment.text}</p></div>)}
          </div>
        </section>

        <section id="domaines" className="bg-[hsl(var(--primary))] py-24 text-[hsl(var(--primary-foreground))] sm:py-32">
          <div className="jbf-container">
            <SectionHeading kicker="Domaines d’intervention" title={<>Le droit comme<br /><em className="text-[hsl(var(--accent))]">outil de décision.</em></>}>
              <p className="mt-7 max-w-xl text-base leading-7 text-[hsl(var(--primary-foreground)/.7)]">De la prévention à la gestion du litige, chaque intervention cherche le juste équilibre entre précision juridique, compréhension du terrain et efficacité.</p>
            </SectionHeading>
            <div className="mt-20 grid border-t border-[hsl(var(--primary-foreground)/.2)] sm:grid-cols-2 lg:grid-cols-3">
              {practices.map((practice, index) => { const Icon = practice.icon; return <a href="#contact" key={practice.title} className="group border-b border-[hsl(var(--primary-foreground)/.2)] py-8 sm:px-6 sm:first:pl-0 lg:min-h-[255px] lg:px-8 lg:py-10" data-testid={`link-practice-${index}`}><div className="flex items-start justify-between"><Icon className="h-6 w-6 stroke-[1.25] text-[hsl(var(--accent))]" /><ArrowUpRight className="h-4 w-4 opacity-40 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div><h3 className="jbf-serif mt-12 text-3xl">{practice.title}</h3><p className="mt-3 max-w-xs text-sm leading-6 text-[hsl(var(--primary-foreground)/.62)]">{practice.text}</p></a>; })}
            </div>
          </div>
        </section>

        <section id="equipe" className="jbf-container py-24 sm:py-32">
          <SectionHeading kicker="Parcours professionnel" title={<>Une expérience<br /><em className="text-[hsl(var(--primary))]">en mouvement.</em></>}>
            <p className="mt-7 max-w-xl text-base leading-7 text-[hsl(var(--muted-foreground))]">Le parcours d’Anass Moumen s’est construit au sein de plusieurs environnements professionnels du droit, au contact de problématiques variées et de clients aux besoins concrets.</p>
          </SectionHeading>
          <div className="mt-20 grid gap-8 md:grid-cols-[.7fr_1.3fr]">
            <div className="flex aspect-[1.05] items-end bg-[hsl(var(--primary))] p-7 text-[hsl(var(--primary-foreground))] sm:p-10"><div><p className="jbf-eyebrow text-[hsl(var(--accent))]">Profil</p><img src={monogramPath} alt="Monogramme AM" className="jbf-monogram mt-5" /><p className="mt-8 text-sm text-[hsl(var(--primary-foreground)/.7)]">Avocat au Barreau<br />de Casablanca</p></div></div>
            <div className="border-t border-[hsl(var(--border))]">
              {[['BRAHMA AVOCATS', 'Expérience professionnelle'], ['BENZEKRI LAW FIRM', 'Expérience professionnelle'], ['Cabinet Maîtres BENAMMAR', 'Expérience professionnelle']].map(([firm, label], index) => <div key={firm} className="group flex items-center justify-between border-b border-[hsl(var(--border))] py-7"><div><p className="jbf-eyebrow text-[hsl(var(--accent))]">{label}</p><h3 className="jbf-serif mt-2 text-3xl sm:text-4xl">{firm}</h3></div><span className="font-mono text-xs text-[hsl(var(--muted-foreground))]">0{index + 1}</span></div>)}
            </div>
          </div>
          <div className="mt-16 flex flex-wrap items-center gap-5 border-t border-[hsl(var(--border))] pt-7"><Languages className="h-5 w-5 text-[hsl(var(--accent))]" /><span className="jbf-eyebrow">Langues de travail</span><span className="text-sm font-semibold">Français</span><span className="text-sm font-semibold">English</span><span className="text-sm font-semibold">العربية</span></div>
        </section>

        <section id="articles" className="jbf-grid-lines border-y border-[hsl(var(--border))] py-24 sm:py-32">
          <div className="jbf-container">
            <SectionHeading kicker="Repères" title={<>Lire le droit<br /><em className="text-[hsl(var(--primary))]">autrement.</em></>}>
              <p className="mt-7 max-w-xl text-base leading-7 text-[hsl(var(--muted-foreground))]">Quelques angles de lecture pour mieux préparer une décision, une négociation ou un premier échange.</p>
            </SectionHeading>
            <div className="mt-20 grid border-t border-[hsl(var(--border))] lg:grid-cols-3">
              {articles.map((article, index) => <a href="#contact" key={article.title} className="group border-b border-[hsl(var(--border))] py-7 lg:border-r lg:px-7 lg:py-8 lg:first:pl-0 lg:last:border-r-0" data-testid={`link-article-${index}`}><span className="text-[.65rem] font-bold uppercase tracking-[.12em] text-[hsl(var(--accent))]">{article.tag}</span><h3 className="jbf-serif mt-12 max-w-sm text-3xl leading-[1.03] transition-colors group-hover:text-[hsl(var(--primary))]">{article.title}</h3><span className="mt-12 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.12em]">Échanger sur ce sujet <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></span></a>)}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[hsl(var(--foreground))] py-24 text-[hsl(var(--background))] sm:py-32">
          <div className="jbf-container">
            <div className="grid gap-16 lg:grid-cols-[1.1fr_.9fr] lg:gap-24">
              <div><img src={reversedLogoPath} alt="" aria-hidden="true" className="jbf-footer-logo mb-9" /><p className="jbf-eyebrow text-[hsl(var(--background)/.55)]">Prendre rendez-vous</p><h2 className="jbf-serif mt-6 max-w-xl text-6xl leading-[.88] sm:text-8xl">Commencer par<br /><em className="text-[hsl(var(--accent))]">se parler.</em></h2><p className="mt-8 max-w-md text-base leading-7 text-[hsl(var(--background)/.62)]">Pour une première prise de contact confidentielle, écrivez ou laissez vos coordonnées. Casablanca et échanges à distance, sur rendez-vous.</p><div className="mt-10 flex flex-wrap gap-3"><a href="#contact" className="inline-flex items-center gap-3 border border-[hsl(var(--background)/.3)] px-5 py-4 text-xs font-bold uppercase tracking-[.11em] transition-colors hover:bg-[hsl(var(--background))] hover:text-[hsl(var(--foreground))]" data-testid="link-contact-phone"><MessageCircle className="h-4 w-4" /> Demander un échange</a><a href="https://wa.me/?text=Bonjour%20Ma%C3%AEtre%20Moumen%2C%20je%20souhaite%20un%20premier%20%C3%A9change." target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-[hsl(var(--accent))] px-5 py-4 text-xs font-bold uppercase tracking-[.11em] text-[hsl(var(--accent-foreground))]" data-testid="link-contact-whatsapp"><MessageCircle className="h-4 w-4" /> WhatsApp</a></div></div>
              <div className="border-t border-[hsl(var(--background)/.25)] pt-7"><p className="jbf-eyebrow text-[hsl(var(--background)/.55)]">Coordonnées</p><div className="mt-7 space-y-7"><a href="mailto:coordonnees-a-confirmer@example.com" className="group flex items-center justify-between border-b border-[hsl(var(--background)/.2)] pb-5 text-xl transition-colors hover:text-[hsl(var(--accent))]" data-testid="link-contact-email"><span>Email professionnel — à confirmer</span><Mail className="h-5 w-5 opacity-50" /></a><a href="#contact" className="flex items-start justify-between border-b border-[hsl(var(--background)/.2)] pb-5 text-sm leading-6 text-[hsl(var(--background)/.62)]" data-testid="link-contact-phone-placeholder"><span>Téléphone professionnel<br />Coordonnées sur demande</span><ChevronRight className="h-5 w-5 opacity-50" /></a><div className="flex items-start justify-between"><span className="text-sm leading-6 text-[hsl(var(--background)/.62)]">Barreau de Casablanca<br />Premier échange confidentiel</span><span className="h-2 w-2 rounded-full bg-[hsl(var(--accent))]" /></div></div></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[hsl(var(--foreground))] px-4 pb-9 text-[hsl(var(--background))]">
        <div className="jbf-container border-t border-[hsl(var(--background)/.2)] pt-7"><div className="flex flex-col items-start justify-between gap-7 sm:flex-row sm:items-center"><Logo light /><div className="flex flex-wrap gap-x-6 gap-y-3 text-[.62rem] font-semibold uppercase tracking-[.12em] text-[hsl(var(--background)/.55)]"><a href="#accueil" className="hover:text-[hsl(var(--background))]" data-testid="link-footer-home">Accueil</a><a href="#contact" className="hover:text-[hsl(var(--background))]" data-testid="link-footer-legal">Mentions légales</a><a href="#contact" className="hover:text-[hsl(var(--background))]" data-testid="link-footer-privacy">Confidentialité</a><a href="https://www.linkedin.com/in/moumen-a" target="_blank" rel="noreferrer" className="hover:text-[hsl(var(--background))]" data-testid="link-footer-linkedin">LinkedIn</a></div></div><p className="mt-9 text-[.62rem] text-[hsl(var(--background)/.4)]">© {new Date().getFullYear()} Anass Moumen · Avocat au Barreau de Casablanca</p></div>
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