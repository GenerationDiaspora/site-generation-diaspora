import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-red-900 via-red-800 to-orange-700 text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Logos */}
          <div className="flex items-center gap-4 mb-8">
            <div className="relative w-20 h-20 rounded-2xl overflow-hidden p-2 bg-white/10 backdrop-blur-sm">
              <Image
                src="/logo.png"
                alt="Logo Génération Diaspora"
                width={80}
                height={80}
                className="object-contain"
                priority
              />
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-2 text-center">
              <p className="text-xs text-white/60 uppercase tracking-widest mb-0.5">en partenariat avec</p>
              <p className="text-sm font-bold text-white tracking-wide">Oxy&apos;Jeunes</p>
            </div>
          </div>

          {/* Badge */}
          <span className="inline-block mb-6 bg-green-600/80 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full">
            Webinaire · Jeudi 25 Juin 2026
          </span>

          {/* Titre */}
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight leading-none mb-3 text-balance">
            Retour Estival
          </h1>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-none mb-6 text-red-200 text-balance">
            des MRE
          </h2>

          {/* Tagline */}
          <p className="text-xl md:text-2xl font-light italic text-white/90 mb-2">
            Mieux se comprendre, mieux avancer ensemble.
          </p>

          {/* Badge webinaire */}
          <div className="mt-6 inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
            <p className="text-sm font-semibold text-white/95 tracking-wide">
              21h00 · Heure française · Gratuit sur inscription
            </p>
          </div>

          <div className="mt-8 w-16 h-1 rounded-full bg-red-300/60" />
        </div>
      </div>
    </section>
  );
}
