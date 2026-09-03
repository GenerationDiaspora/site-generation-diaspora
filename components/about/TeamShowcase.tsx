"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Maximize2, X } from "lucide-react";
import type { BureauMember, Membre } from "@/data/bureau";

type Tier = "honneur" | "legal" | "conseiller" | "membre";

interface DisplayMember {
  name: string;
  role?: string;
  description?: string;
  photo: string;
  tier: Tier;
}

interface TeamShowcaseProps {
  presidentHonneur: BureauMember;
  bureauLegal: BureauMember[];
  conseillers: BureauMember[];
  membres: Membre[];
}

const ROLE_TEXT: Record<Tier, string> = {
  honneur: "text-gold-600",
  legal: "text-primary-600",
  conseiller: "text-secondary-600",
  membre: "text-gray-500",
};

const RING_HOVER: Record<Tier, string> = {
  honneur: "group-hover:ring-gold-500",
  legal: "group-hover:ring-primary-500/70",
  conseiller: "group-hover:ring-secondary-500/70",
  membre: "group-hover:ring-gray-400/70",
};

const RING_IDLE: Record<Tier, string> = {
  honneur: "ring-gold-300/70",
  legal: "ring-transparent",
  conseiller: "ring-transparent",
  membre: "ring-transparent",
};

const SIZE_DIMS: Record<"xl" | "lg" | "md" | "sm", string> = {
  xl: "w-36 h-36 sm:w-44 sm:h-44",
  lg: "w-28 h-28 sm:w-32 sm:h-32",
  md: "w-24 h-24 sm:w-28 sm:h-28",
  sm: "w-20 h-20 sm:w-24 sm:h-24",
};

function TierDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold-300/70" />
      <h3 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-[0.2em] px-2 whitespace-nowrap">
        {label}
      </h3>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold-300/70" />
    </div>
  );
}

function MemberTile({
  member,
  size = "md",
  onOpen,
}: {
  member: DisplayMember;
  size?: "xl" | "lg" | "md" | "sm";
  onOpen: (member: DisplayMember, trigger: HTMLElement) => void;
}) {
  return (
    <div className="flex flex-col items-center text-center w-32 sm:w-36">
      <button
        type="button"
        onClick={(e) => onOpen(member, e.currentTarget)}
        className="group relative rounded-full cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-300 focus-visible:ring-offset-2 focus-visible:ring-offset-beige"
        aria-label={`Agrandir la photo de ${member.name}`}
      >
        <span
          className={`relative block ${SIZE_DIMS[size]} rounded-full overflow-hidden ring-2 ring-offset-4 ring-offset-beige transition-all duration-500 motion-reduce:transition-none group-hover:ring-[3px] ${RING_IDLE[member.tier]} ${RING_HOVER[member.tier]} shadow-sm group-hover:shadow-xl`}
        >
          <Image
            src={member.photo}
            alt={member.name}
            fill
            sizes="180px"
            className="object-cover transition-transform duration-700 ease-out motion-reduce:transition-none group-hover:scale-110"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-primary-900/0 group-hover:bg-primary-900/30 transition-colors duration-500">
            <Maximize2
              className="w-5 h-5 sm:w-6 sm:h-6 text-white opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 motion-reduce:transition-none"
              strokeWidth={1.75}
            />
          </span>
        </span>
      </button>
      <p className="mt-4 text-sm sm:text-base font-semibold text-gray-900 leading-tight">
        {member.name}
      </p>
      {member.role && (
        <p className={`text-[11px] sm:text-xs font-medium uppercase tracking-wider mt-1 ${ROLE_TEXT[member.tier]}`}>
          {member.role}
        </p>
      )}
    </div>
  );
}

function MemberModal({
  member,
  onClose,
}: {
  member: DisplayMember | null;
  onClose: () => void;
}) {
  const [visible, setVisible] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!member) {
      setVisible(false);
      return;
    }
    const frame = requestAnimationFrame(() => setVisible(true));
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = "";
    };
  }, [member]);

  useEffect(() => {
    if (!member) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [member, onClose]);

  if (!member) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 transition-opacity duration-300 motion-reduce:transition-none ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label={`Photo de ${member.name}`}
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-md transition-all duration-300 motion-reduce:transition-none ${
          visible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-3"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="absolute -top-4 -right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-primary-900">
          <Image
            src={member.photo}
            alt={member.name}
            fill
            sizes="(max-width: 640px) 100vw, 448px"
            className="object-cover"
            priority
          />
        </div>

        <div className="mt-5 text-center">
          <p className="text-xl font-bold text-white">{member.name}</p>
          {member.role && (
            <p className="text-gold-300 text-sm font-semibold uppercase tracking-wider mt-1">
              {member.role}
            </p>
          )}
          {member.description && (
            <p className="text-white/70 text-sm mt-2">{member.description}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function TeamShowcase({
  presidentHonneur,
  bureauLegal,
  conseillers,
  membres,
}: TeamShowcaseProps) {
  const [selected, setSelected] = useState<DisplayMember | null>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);

  const openMember = useCallback((member: DisplayMember, trigger: HTMLElement) => {
    lastTrigger.current = trigger;
    setSelected(member);
  }, []);

  const closeModal = useCallback(() => {
    setSelected(null);
    lastTrigger.current?.focus();
  }, []);

  const honneur: DisplayMember = { ...presidentHonneur, tier: "honneur" };
  const legal: DisplayMember[] = bureauLegal.map((m) => ({ ...m, tier: "legal" }));
  const conseil: DisplayMember[] = conseillers.map((m) => ({ ...m, tier: "conseiller" }));
  const simples: DisplayMember[] = membres.map((m) => ({ ...m, tier: "membre" }));

  const totalMembres = 1 + legal.length + conseil.length + simples.length;

  return (
    <>
      {/* Notre Bureau */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-gold-600 mb-3">
                Gouvernance 2026
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Notre Bureau</h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Une équipe renouvelée, engagée et passionnée au service de la jeunesse marocaine
              </p>
            </div>

            {/* Parrain & Président d'honneur */}
            <div className="flex justify-center mb-16 md:mb-20">
              <MemberTile member={honneur} size="xl" onOpen={openMember} />
            </div>

            {/* Bureau légal */}
            <TierDivider label="Bureau légal" />
            <div className="flex flex-wrap justify-center gap-x-8 sm:gap-x-12 gap-y-12 mb-16 md:mb-20">
              {legal.map((member) => (
                <MemberTile
                  key={member.name}
                  member={member}
                  size={member.role === "Président" ? "lg" : "md"}
                  onOpen={openMember}
                />
              ))}
            </div>

            {/* Conseillers */}
            <TierDivider label="Conseillers" />
            <div className="bg-white/60 rounded-3xl p-8 sm:p-10 ring-1 ring-gray-100">
              <div className="flex flex-wrap justify-center gap-x-10 gap-y-10">
                {conseil.map((member) => (
                  <MemberTile key={member.name} member={member} size="sm" onOpen={openMember} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Membres */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary-600 mb-3">
              La communauté
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Nos Membres</h2>
            <p className="mt-4 mb-14 text-gray-600">
              {totalMembres} membres engagés pour faire rayonner la diaspora marocaine
            </p>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-10">
              {simples.map((member) => (
                <MemberTile key={member.name} member={member} size="md" onOpen={openMember} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <MemberModal member={selected} onClose={closeModal} />
    </>
  );
}
