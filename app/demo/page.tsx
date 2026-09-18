import type { Metadata } from "next";
import DemoApp from "@/components/demo-app";

export const metadata: Metadata = {
  title: "Démo interactive",
  description:
    "Démo interactive Ti-Boutik : un mini-site e-commerce couplé à WhatsApp, pour les commerçants de Guadeloupe et des Antilles.",
  alternates: {
    canonical: "/demo",
  },
};

export default function DemoPage() {
  return <DemoApp />;
}
