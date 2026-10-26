import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { ArrowUpRight } from "lucide-react";

const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip-linkedin-team01)">
      <path d="M13.633 13.633h-2.37V9.92c0-.885-.017-2.025-1.234-2.025-1.235 0-1.424.965-1.424 1.96v3.778h-2.37V5.998H8.51v1.043h.031a2.5 2.5 0 0 1 2.246-1.233c2.403 0 2.846 1.58 2.846 3.637zM3.56 4.954a1.376 1.376 0 1 1 0-2.751 1.376 1.376 0 0 1 0 2.751m1.185 8.679H2.372V5.998h2.373zM14.815.001H1.18A1.17 1.17 0 0 0 0 1.154v13.691A1.17 1.17 0 0 0 1.18 16h13.635A1.17 1.17 0 0 0 16 14.845V1.153A1.17 1.17 0 0 0 14.815 0" fill="currentColor"/>
    </g>
    <defs>
      <clipPath id="clip-linkedin-team01"><rect width="16" height="16" fill="white"/></clipPath>
    </defs>
  </svg>
);

export type TeamMember = {
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  image: string;
  slug: string;
  domains: string[];
  socials: { linkedin: string };
};

export const teamData: TeamMember[] = [
  {
    name: "Anass Moumen",
    firstName: "Anass",
    lastName: "Moumen",
    role: "Avocat au Barreau de Casablanca",
    image: "/anass-moumen.jpg",
    slug: "anass-moumen",
    domains: ["Droit des affaires", "Droit social"],
    socials: { linkedin: "https://www.linkedin.com/in/moumen-a/" },
  },
];

const Team = () => {
  const [, navigate] = useLocation();

  const handleProfileClick = (e: React.MouseEvent, slug: string) => {
    e.preventDefault();
    sessionStorage.setItem("scrollPos_/", window.scrollY.toString());
    navigate(`/avocat/${slug}`);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[hsl(var(--background))]">
      <div className="jbf-container">
        {/* Section header */}
        <div className="mb-14">
          <p className="text-[.6rem] font-bold uppercase tracking-[.2em] text-[hsl(var(--accent))] mb-3">L&apos;équipe</p>
        </div>

        {/* Cards grid — centred for single member */}
        <div className="flex justify-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-4xl">
            {teamData.map((member, index) => (
              <motion.div
                key={member.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="group flex flex-col"
              >
                {/* Portrait */}
                <a href={`/avocat/${member.slug}`} onClick={(e) => handleProfileClick(e, member.slug)} className="block relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle dark overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all duration-500" />
                  {/* Number badge — bottom left */}
                  <div className="absolute bottom-3 left-3 font-mono text-[.6rem] text-white/70 tracking-[.15em]">
                    0{index + 1}&nbsp;/&nbsp;0{teamData.length}
                  </div>
                </a>

                {/* Info */}
                <div className="mt-5 border-t border-[hsl(var(--border))] pt-5">
                  <p className="text-[.58rem] font-bold uppercase tracking-[.18em] text-[hsl(var(--muted-foreground))] mb-3">
                    {member.role}
                  </p>
                  <h3 className="jbf-serif text-3xl leading-[1.0] mb-2">
                    {member.firstName}<br />
                    <em className="italic">{member.lastName}</em>
                  </h3>
                  <p className="text-xs text-[hsl(var(--muted-foreground))] mb-4 tracking-wide">
                    {member.domains.join(" · ")}
                  </p>
                  <a
                    href={`/avocat/${member.slug}`}
                    onClick={(e) => handleProfileClick(e, member.slug)}
                    className="inline-flex items-center gap-2 text-[.65rem] font-bold uppercase tracking-[.14em] border-b border-[hsl(var(--foreground))] pb-0.5 hover:text-[hsl(var(--accent))] hover:border-[hsl(var(--accent))] transition-colors"
                  >
                    Voir le profil <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
