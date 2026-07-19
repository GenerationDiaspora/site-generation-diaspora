"use client";

import { useState, FormEvent } from "react";
import { Mail, CheckCircle2 } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Pour l'intégration avec Brevo (Sendinblue)
      if (process.env.NEXT_PUBLIC_BREVO_API_KEY) {
        const response = await fetch("/api/newsletter", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        if (response.ok) {
          setSubmitStatus("success");
          setEmail("");
        } else {
          throw new Error("Erreur lors de l'inscription");
        }
      } else {
        // Simulation pour le développement
        console.log("📧 Inscription à la newsletter:", email);
        setTimeout(() => {
          setSubmitStatus("success");
          setEmail("");
          setIsSubmitting(false);
        }, 1000);
        return;
      }
    } catch (error) {
      console.error("Erreur:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }

    // Réinitialiser le message après 5 secondes
    setTimeout(() => {
      setSubmitStatus("idle");
    }, 5000);
  };

  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
        <Mail className="w-16 h-16 mx-auto mb-6 text-white" />
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Restez informés
        </h2>
        <p className="text-lg mb-8 text-white/90">
          Inscrivez-vous à notre newsletter pour recevoir toutes nos actualités, événements et opportunités
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre adresse email"
              required
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {isSubmitting ? "Inscription..." : "S'inscrire"}
            </button>
          </div>

          {submitStatus === "success" && (
            <div className="bg-gold-500/20 border border-gold-300 rounded-lg p-4 flex items-center justify-center gap-3 text-white">
              <CheckCircle2 className="w-5 h-5" />
              <p className="text-sm font-medium">
                Merci ! Votre inscription a été prise en compte.
              </p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="bg-secondary-500/20 border border-secondary-300 rounded-lg p-4 text-white">
              <p className="text-sm">
                Une erreur est survenue. Veuillez réessayer.
              </p>
            </div>
          )}
        </form>

        <p className="text-sm text-white/70 mt-4">
          Nous respectons votre vie privée. Vos données ne seront jamais partagées.
        </p>
      </div>
    </div>
  );
}

