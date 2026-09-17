import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boutik & WhatsApp — Commerce en ligne pour la Guadeloupe",
  description:
    "Un mini-site avec votre catalogue, des commandes sur WhatsApp et le paiement par carte, sans back-office.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        {children}
        <script
          defer
          src="https://analytique.killian-lecrut.com/script.js"
          data-website-id="9fb7ca97-b4b5-4da6-8c62-e684fc4704c1"
        />
        <script
          defer
          src="https://analytique.killian-lecrut.com/recorder.js"
          data-website-id="9fb7ca97-b4b5-4da6-8c62-e684fc4704c1"
          data-sample-rate="1"
          data-mask-level="moderate"
          data-max-duration="300000"
        />
      </body>
    </html>
  );
}
