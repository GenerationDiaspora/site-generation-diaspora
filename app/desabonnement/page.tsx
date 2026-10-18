import { Metadata } from "next";
import { redirect } from "next/navigation";
import UnsubscribeConfirm from "@/components/desabonnement/UnsubscribeConfirm";

export const metadata: Metadata = {
  title: "Désabonnement — Génération Diaspora",
  robots: { index: false, follow: false },
};

export default function DesabonnementPage({
  searchParams,
}: {
  searchParams: { e?: string; s?: string };
}) {
  const { e, s } = searchParams;
  if (!e || !s) {
    redirect("/");
  }

  return (
    <div className="bg-beige min-h-[60vh]">
      <div className="container mx-auto px-4 py-16">
        <UnsubscribeConfirm email={e} signature={s} />
      </div>
    </div>
  );
}
