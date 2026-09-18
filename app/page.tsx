import type { Metadata } from "next";
import Landing from "@/components/landing";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute:
      "Ti-Boutik — Site e-commerce & commandes WhatsApp en Guadeloupe et aux Antilles",
  },
  description:
    "Ti-Boutik crée votre site e-commerce sur mesure en Guadeloupe et aux Antilles : catalogue en ligne, commandes et paiement par carte (Stripe, Apple Pay, Google Pay, PayPal) directement sur WhatsApp. Restaurants, location de voitures, excursions, boutiques, artisans.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Ti-Boutik — Site e-commerce & commandes WhatsApp en Guadeloupe et aux Antilles",
    description:
      "Votre mini-site sur mesure, trouvable sur Google partout en Guadeloupe et aux Antilles, relié à votre WhatsApp. Commandez et payez en ligne, sans back-office.",
    url: SITE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "Création de mini-sites e-commerce pour les commerçants de Guadeloupe et des Antilles : catalogue en ligne, commandes et paiement via WhatsApp.",
  areaServed: [
    "Guadeloupe",
    "Martinique",
    "Saint-Martin",
    "Saint-Barthélemy",
    "Antilles françaises",
  ],
  priceRange: "€€",
  email: "killian.lecrut@gmail.com",
  telephone: "+33691244857",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Landing />
    </>
  );
}
