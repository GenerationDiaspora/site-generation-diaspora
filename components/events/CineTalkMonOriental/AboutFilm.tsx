export default function AboutFilm() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-4 block">
            À propos du film
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-balance">
            Mon Oriental
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed mb-10">
            <em>Mon Oriental</em> est un documentaire qui explore la mémoire, les racines et
            l&apos;identité des Marocains de l&apos;Oriental. Une œuvre poignante signée Khalid
            Zaouche, présentée en avant-première avec son réalisateur pour un échange
            inédit avec le public.
          </p>

          <blockquote className="border-l-4 border-amber-500 pl-6 italic text-xl text-white/90 leading-relaxed">
            &ldquo;Entre deux rives, une mémoire s&apos;éveille — celle d&apos;une génération qui cherche
            ses racines sans perdre son présent.&rdquo;
          </blockquote>

          <div className="mt-12 grid sm:grid-cols-3 gap-6 text-center">
            <div className="bg-white/5 rounded-xl p-6">
              <p className="text-3xl font-bold text-amber-400 mb-1">2026</p>
              <p className="text-gray-400 text-sm">Avant-première à Paris</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6">
              <p className="text-3xl font-bold text-amber-400 mb-1">Documentaire</p>
              <p className="text-gray-400 text-sm">Genre</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6">
              <p className="text-3xl font-bold text-amber-400 mb-1">Khalid Zaouche</p>
              <p className="text-gray-400 text-sm">Réalisateur</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
