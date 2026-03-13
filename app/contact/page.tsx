"use client";

import { Metadata } from "next";
import { useState, FormEvent } from "react";
import { Mail, User, MessageSquare, Send, Facebook, Instagram, Linkedin } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Erreur envoi");

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-beige">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-beige py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contactez-nous</h1>
            <p className="text-xl opacity-90">
              Une question ? Un projet ? Vous souhaitez rejoindre Génération Diaspora ?
              N'hésitez pas à nous écrire, nous vous répondrons dans les plus brefs délais
            </p>
          </div>
        </div>
      </section>

      {/* Formulaire de contact */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-beige rounded-2xl shadow-xl p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nom */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Adresse email *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Votre message *
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <MessageSquare className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                      placeholder="Décrivez votre demande..."
                    />
                  </div>
                </div>

                {/* Messages de statut */}
                {submitStatus === "success" && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm text-green-700">
                      Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm text-red-700">
                      Une erreur est survenue. Veuillez réessayer.
                    </p>
                  </div>
                )}

                {/* Bouton submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Envoyer le message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Informations de contact */}
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Autres moyens de nous contacter</h3>
              <div className="flex flex-col items-center gap-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail className="w-5 h-5 text-primary-600" />
                  <a href="mailto:contact@generationdiaspora.com" className="hover:text-primary-600 transition-colors">
                    contact@generationdiaspora.com
                  </a>
                </div>

                <div>
                  <p className="text-gray-600 mb-4 font-semibold">Suivez-nous sur les réseaux sociaux :</p>
                  <div className="flex justify-center gap-4">
                    <a
                      href="https://www.facebook.com/groups/1013728587602196"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-6 h-6 text-white" />
                    </a>
                    <a
                      href="https://www.instagram.com/generation.diaspora.ma"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-6 h-6 text-white" />
                    </a>
                    <a
                      href="https://linkedin.com/company/génération-diaspora/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

