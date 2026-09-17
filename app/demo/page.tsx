import type { Metadata } from "next";
import DemoApp from "@/components/demo-app";

export const metadata: Metadata = {
  title: "Démo interactive — Boutik & WhatsApp",
  description:
    "Démo interactive : mini-site e-commerce couplé à WhatsApp pour la Guadeloupe.",
};

export default function DemoPage() {
  return <DemoApp />;
}
