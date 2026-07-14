export default function AboutWebinaire() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-red-400 mb-4 block">
            À propos du webinaire
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-balance">
            Deux jeunesses qui se croisent. Se comprennent-elles vraiment ?
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Chaque été, des milliers de jeunes MRE posent leurs valises au Maroc. Deux jeunesses
            se croisent — celle de la diaspora et celle du Royaume. Mais entre regards,
            représentations et malentendus, le dialogue reste souvent difficile.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mb-10">
            Comment améliorer la perception mutuelle ? Comment tisser des liens amicaux et
            novateurs entre ces deux jeunesses ? Il est temps d&apos;en parler franchement.
          </p>

          <blockquote className="border-l-4 border-red-500 pl-6 italic text-xl text-white/90 leading-relaxed">
            &ldquo;Regards, représentations, malentendus, opportunités — un espace de dialogue
            sincère entre jeunes MRE et jeunes du Royaume.&rdquo;
          </blockquote>

          <div className="mt-12 grid sm:grid-cols-3 gap-6 text-center">
            <div className="bg-white/5 rounded-xl p-6">
              <p className="text-3xl font-bold text-red-400 mb-1">25 Juin</p>
              <p className="text-gray-400 text-sm">21h00, heure française</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6">
              <p className="text-3xl font-bold text-red-400 mb-1">Webinaire</p>
              <p className="text-gray-400 text-sm">100% en ligne, gratuit</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6">
              <p className="text-3xl font-bold text-red-400 mb-1">Oxy&apos;Jeunes</p>
              <p className="text-gray-400 text-sm">Partenaire officiel</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
