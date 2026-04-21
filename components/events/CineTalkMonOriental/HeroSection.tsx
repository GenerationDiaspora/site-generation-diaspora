import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-orange-900 via-amber-700 to-orange-500 text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 relative w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden p-2.5 bg-white/10 backdrop-blur-sm">
            <Image
              src="/logo.png"
              alt="Logo Génération Diaspora"
              width={100}
              height={100}
              className="object-contain"
              priority
            />
          </div>

          {/* Badge */}
          <span className="inline-block mb-6 bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full animate-pulse">
            Save the Date — 10 Mai 2026
          </span>

          {/* Titre */}
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tight leading-none mb-2 text-balance">
            Diaspora Ciné Talk
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest mb-6 text-amber-200 text-balance">
            Mon Oriental
          </h2>

          {/* Tagline */}
          <p className="text-xl md:text-2xl font-light italic text-white/90 mb-2">
            Entre mémoire et identité
          </p>

          {/* Sous-info */}
          <p className="text-sm md:text-base text-white/70 mt-4 tracking-wide uppercase">
            Projection &amp; Débat · Khalid Zaouche &amp; Jawad Zaouche
          </p>

          {/* Places limitées */}
          <div className="mt-6 inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2">
            <span className="w-2 h-2 rounded-full bg-amber-300 animate-pulse flex-shrink-0" />
            <p className="text-sm font-semibold text-white/95 tracking-wide">
              Sur inscription — places très limitées
            </p>
          </div>

          {/* Séparateur */}
          <div className="mt-8 w-16 h-1 rounded-full bg-amber-300/60" />
        </div>
      </div>
    </section>
  );
}
