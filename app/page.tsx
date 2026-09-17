import type { Metadata } from "next";
import Landing from "@/components/landing";

export const metadata: Metadata = {
  title: "Boutik & WhatsApp — Commerce en ligne pour la Guadeloupe",
  description:
    "Un mini-site élégant avec votre catalogue, des commandes qui arrivent sur WhatsApp et le paiement par carte, sans back-office.",
};

export default function Home() {
  return <Landing />;
}
