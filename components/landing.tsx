"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Banknote,
  CreditCard,
  Globe,
  MessageCircle,
  Search,
} from "lucide-react";
import {
  ApplePayIcon,
  GooglePayIcon,
  PayPalIcon,
  WhatsAppIcon,
} from "@/components/icons";

const CONTACT_WHATSAPP = "https://wa.me/33641970383";
const CONTACT_EMAIL = "mailto:killian.lecrut@gmail.com";

export default function Landing() {
  return (
    <div className="min-h-screen bg-cream text-foreground">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 px-4 pb-24 pt-20 text-white">
        <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-teal-300/15 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-amber-200 backdrop-blur">
              🇬🇵 Pensé pour la Guadeloupe
            </span>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              Votre site web à vous,
              <br className="hidden sm:block" /> vos paiements{" "}
              <span className="text-wa">modernes</span>.
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mx-auto mt-5 max-w-xl text-lg text-emerald-50/90">
              Un vrai site avec votre propre domaine, relié à votre WhatsApp
              Business. Vos clients paient en ligne par carte, PayPal, Apple
              Pay ou Google Pay — sans que vous quittiez WhatsApp.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/demo"
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-base font-bold text-emerald-800 shadow-lg transition hover:bg-emerald-50 sm:w-auto"
              >
                Voir la démo interactive
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href={CONTACT_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-wa px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-green-600/30 transition hover:brightness-105 sm:w-auto"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Prendre contact
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Problème */}
      <section id="concept" className="mx-auto max-w-5xl px-4 py-20">
        <FadeIn>
          <h2 className="text-center text-3xl font-extrabold tracking-tight">
            Sur Google, on ne vous trouve pas encore
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-zinc-600">
            Vos clients habituels vous écrivent déjà sur WhatsApp, et
            c&apos;est très bien. Mais ceux qui ne vous connaissent pas
            cherchent sur Google.
          </p>
        </FadeIn>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <FadeIn delay={0.05}>
            <div className="h-full rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold">Vos clients habituels</h3>
              <p className="mt-2 text-zinc-600">
                Ils vous écrivent déjà sur WhatsApp. Rien ne change pour eux.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="h-full rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold">Les nouveaux clients</h3>
              <p className="mt-2 text-zinc-600">
                Ils passent par Google ou Maps. Sans site, ils ne vous trouvent
                pas et vont voir ailleurs.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Solution */}
      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <h2 className="text-center text-3xl font-extrabold tracking-tight">
              Un site sur mesure, trouvable sur Google
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-zinc-600">
              Votre vitrine en ligne, avec vos habitudes WhatsApp intactes.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <Pillar
              delay={0}
              icon={<Globe className="h-6 w-6" />}
              title="Votre site sur mesure"
              color="text-emerald-700 bg-emerald-100"
              text="Un design unique, une page unique, à votre domaine — avec vos photos et vos prix."
            />
            <Pillar
              delay={0.06}
              icon={<Search className="h-6 w-6" />}
              title="Trouvable sur Google"
              color="text-amber-700 bg-amber-100"
              text="Votre site est référencé : les gens qui vous cherchent vous trouvent."
            />
            <Pillar
              delay={0.12}
              icon={<MessageCircle className="h-6 w-6" />}
              title="Guidés vers WhatsApp"
              color="text-green-700 bg-green-100"
              text="Le client remplit son panier, puis le contact et le paiement se font sur WhatsApp."
            />
          </div>
        </div>
      </section>

      {/* Deux mondes */}
      <section className="bg-emerald-900 px-4 py-20 text-white">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <h2 className="text-center text-3xl font-extrabold tracking-tight">
              Chacun commande à sa façon
            </h2>
            <p className="mt-3 text-center text-emerald-50/80">
              Vos clients gardent leurs habitudes.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <FadeIn delay={0.05}>
              <div className="h-full rounded-3xl bg-white/10 p-6 backdrop-blur">
                <p className="text-sm font-semibold text-amber-300">
                  Vos clients habituels
                </p>
                <p className="mt-2 text-emerald-50/90">
                  Ils continuent sur WhatsApp, comme avant.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="h-full rounded-3xl bg-white/10 p-6 backdrop-blur">
                <p className="text-sm font-semibold text-amber-300">
                  Les nouveaux
                </p>
                <p className="mt-2 text-emerald-50/90">
                  Ils vous trouvent sur Google ou Maps, parcourent votre site,
                  puis finalisent sur WhatsApp.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section id="comment" className="mx-auto max-w-3xl px-4 py-20">
        <FadeIn>
          <h2 className="text-center text-3xl font-extrabold tracking-tight">
            Comment ça marche
          </h2>
          <p className="mt-3 text-center text-zinc-600">
            De la prise de contact à votre premier paiement en ligne.
          </p>
        </FadeIn>
        <div className="mt-10 space-y-4">
          <Step
            n={1}
            title="Prenez contact avec moi"
            text="Un simple message WhatsApp ou un appel : on parle de votre activité et de vos besoins."
          />
          <Step
            n={2}
            title="Je crée votre site sur mesure"
            text="Une page unique, design sur mesure, à votre domaine — avec vos photos, vos prix et vos couleurs."
          />
          <Step
            n={3}
            title="Votre catalogue en ligne"
            text="Vos produits, prix et disponibilités sont gérés simplement : vous gardez la main, sans back-office compliqué."
          />
          <Step
            n={4}
            title="On active les paiements"
            text="Carte bancaire, PayPal, Apple Pay et Google Pay via Stripe. Votre compte est prêt en quelques minutes."
          />
          <Step
            n={5}
            title="Donnez votre WhatsApp"
            text="Vos commandes arrivent directement dans votre conversation, avec le récapitulatif et le lien de paiement."
          />
          <Step
            n={6}
            title="Encaisser sans quitter WhatsApp"
            text="Le client paie par carte, PayPal, Apple Pay, Google Pay ou en espèces. Vous confirmez, c'est tout."
            last
          />
        </div>
      </section>

      {/* Pour qui */}
      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <h2 className="text-center text-3xl font-extrabold tracking-tight">
              Pour qui ?
            </h2>
          </FadeIn>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              "Restaurants & traiteurs",
              "Loueurs de voitures & matériel",
              "Excursions & activités",
              "Artisans & boutiques",
            ].map((label, i) => (
              <FadeIn key={label} delay={i * 0.05}>
                <div className="flex h-full items-center justify-center rounded-2xl bg-cream px-4 py-6 text-center text-sm font-semibold text-zinc-700 ring-1 ring-black/5">
                  {label}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Paiement */}
      <section className="mx-auto max-w-5xl px-4 py-20">
        <FadeIn>
          <h2 className="text-center text-3xl font-extrabold tracking-tight">
            Le paiement en ligne, sans terminal
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-zinc-600">
            Vos clients règlent en ligne, depuis votre site, où qu&apos;ils
            soient. L&apos;argent arrive directement sur votre compte bancaire.
          </p>
        </FadeIn>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          <PayMethod
            icon={<CreditCard className="h-7 w-7 text-zinc-700" />}
            label="Carte en ligne"
          />
          <PayMethod
            icon={<ApplePayIcon className="h-6 w-6 text-black" />}
            label="Apple Pay"
          />
          <PayMethod
            icon={<GooglePayIcon className="h-6 w-6 text-[#4285F4]" />}
            label="Google Pay"
          />
          <PayMethod
            icon={<PayPalIcon className="h-6 w-6 text-[#003087]" />}
            label="PayPal"
          />
        </div>
        <FadeIn>
          <div className="mx-auto mt-6 flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-600 ring-1 ring-black/5">
            <Banknote className="h-5 w-5 text-emerald-600" />
            Et toujours les espèces à la réception, si le client préfère.
          </div>
        </FadeIn>
      </section>

      {/* CTA final */}
      <section
        id="contact"
        className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 px-4 py-20 text-white"
      >
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Prêt à digitaliser votre commerce ?
            </h2>
            <p className="mt-4 text-emerald-50/90">
              Un message suffit pour démarrer. On en parle, et je m&apos;occupe
              du reste.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={CONTACT_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-wa px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-green-600/30 transition hover:brightness-105 sm:w-auto"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Discutons-en sur WhatsApp
              </a>
              <a
                href={CONTACT_EMAIL}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white/10 px-6 py-3.5 text-base font-bold text-white backdrop-blur transition hover:bg-white/20 sm:w-auto"
              >
                Par email
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <footer className="bg-emerald-950 px-4 py-8 text-sm text-emerald-200/60">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 sm:flex-row">
          <p>© 2026 KIKIDEV — Tous droits réservés.</p>
          <Link
            href="/mentions-legales"
            className="transition hover:text-white"
          >
            Mentions légales
          </Link>
        </div>
      </footer>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-emerald-900/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-wa text-white">
            <WhatsAppIcon className="h-5 w-5" />
          </span>
          <span className="text-base font-bold tracking-tight">
            Boutik &amp; WhatsApp
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-emerald-100/80 sm:flex">
          <a href="#concept" className="transition hover:text-white">
            Le concept
          </a>
          <a href="#comment" className="transition hover:text-white">
            Comment ça marche
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </nav>
        <Link
          href="/demo"
          className="rounded-xl bg-white px-4 py-2 text-sm font-bold text-emerald-800 transition hover:bg-emerald-50"
        >
          Voir la démo
        </Link>
      </div>
    </header>
  );
}

function Pillar({
  icon,
  title,
  text,
  color,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  color: string;
  delay: number;
}) {
  return (
    <FadeIn delay={delay}>
      <div className="h-full rounded-3xl bg-cream p-6 ring-1 ring-black/5">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-2xl ${color}`}
        >
          {icon}
        </div>
        <h3 className="mt-4 text-lg font-bold">{title}</h3>
        <p className="mt-2 text-zinc-600">{text}</p>
      </div>
    </FadeIn>
  );
}

function PayMethod({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <FadeIn>
      <div className="flex h-full flex-col items-center justify-center gap-2 rounded-2xl bg-white px-4 py-6 shadow-sm ring-1 ring-black/5">
        <div className="flex h-12 items-center justify-center">{icon}</div>
        <span className="text-sm font-semibold text-zinc-700">{label}</span>
      </div>
    </FadeIn>
  );
}

function Step({
  n,
  title,
  text,
  last,
}: {
  n: number;
  title: string;
  text: string;
  last?: boolean;
}) {
  return (
    <FadeIn>
      <div className="flex gap-4">
        <div className="flex flex-col items-center">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white shadow-sm">
            {n}
          </div>
          {!last && <div className="mt-2 w-px flex-1 bg-black/10" />}
        </div>
        <div className={`pb-8 ${last ? "" : ""}`}>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="mt-1 text-zinc-600">{text}</p>
        </div>
      </div>
    </FadeIn>
  );
}

function FadeIn({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
