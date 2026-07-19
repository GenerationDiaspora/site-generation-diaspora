import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    association: [
      { name: "À propos", href: "/about" },
      { name: "Actualités", href: "/news" },
      { name: "Contact", href: "/contact" },
    ],
    legal: [
      { name: "Mentions légales", href: "#" },
      { name: "Politique de confidentialité", href: "#" },
      { name: "Conditions d'utilisation", href: "#" },
    ],
  };

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/groups/1013728587602196" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/generation.diaspora.ma" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/génération-diaspora/" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo et description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden p-2 hover:opacity-90 transition-all" style={{ backgroundColor: '#F7F4EE' }}>
                <Image
                  src="/logo.png"
                  alt="Logo Génération Diaspora"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-xl">Génération Diaspora</span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              Association dédiée à l'épanouissement de la jeunesse franco-marocaine en France.
              Outil au service des deux rives de la Méditerranée, fondée sur la proximité, l'humanité, la solidarité et la fraternité.
            </p>
            <div className="space-y-2 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:contact@generationdiaspora.com"
                  className="hover:text-white transition-colors"
                >
                  contact@generationdiaspora.com
                </a>
              </div>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.association.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Informations légales */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Informations</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Réseaux sociaux et copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Génération Diaspora. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

