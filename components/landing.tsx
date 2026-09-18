"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Banknote,
  BedDouble,
  Car,
  CarTaxiFront,
  ChevronDown,
  CreditCard,
  Globe,
  MessageCircle,
  Package,
  Sailboat,
  Scissors,
  Search,
  Sparkles,
  Store,
  UtensilsCrossed,
  Wrench,
} from "lucide-react";
import {
  ApplePayIcon,
  GooglePayIcon,
  PayPalIcon,
  WhatsAppIcon,
} from "@/components/icons";
import {
  CommerceShowcase,
  HeroPhone,
  SearchDemo,
} from "@/components/landing-animations";

const CONTACT_WHATSAPP = "https://wa.me/33691244857";
const CONTACT_EMAIL = "mailto:killian.lecrut@gmail.com";

const METIERS = [
  { icon: <UtensilsCrossed className="h-5 w-5" />, label: "Restaurants & traiteurs" },
  { icon: <Car className="h-5 w-5" />, label: "Location de voitures & bateaux" },
  { icon: <Sailboat className="h-5 w-5" />, label: "Excursions & activités" },
  { icon: <Store className="h-5 w-5" />, label: "Boutiques & artisans" },
  { icon: <Scissors className="h-5 w-5" />, label: "Coiffeurs & barbiers" },
  { icon: <Wrench className="h-5 w-5" />, label: "Services & réparations" },
  { icon: <CarTaxiFront className="h-5 w-5" />, label: "Taxis & VTC" },
  { icon: <BedDouble className="h-5 w-5" />, label: "Locations de vacances" },
  { icon: <Sparkles className="h-5 w-5" />, label: "Beauté & bien-être" },
  { icon: <Package className="h-5 w-5" />, label: "Click & collect" },
];

const SEO_POINTS = [
  {
    title: "Page optimisée pour Google",
    text: "Chaque site est conçu et rédigé pour être bien référencé dès sa mise en ligne.",
  },
  {
    title: "Données structurées",
    text: "Votre menu, vos horaires et vos avis sont lus et affichés directement par Google.",
  },
  {
    title: "Fiche Google Business reliée",
    text: "On relie votre site à votre fiche pour apparaître sur Google Maps et les recherches locales.",
  },
  {
    title: "Mots-clés locaux",
    text: "Votre site ressort quand on cherche votre métier suivi de votre commune, de la Guadeloupe ou des Antilles.",
  },
];

const FAQ_ITEMS = [
  {
    q: "Combien ça coûte ?",
    a: "400 € pour la création de votre site, un prix fixe. À partir de la deuxième année, comptez 100 € par an d'hébergement. Aucun abonnement, aucune commission sur vos ventes : seuls les frais bancaires Stripe s'appliquent.",
  },
  {
    q: "Combien de temps pour être en ligne ?",
    a: "Quelques jours. On récupère vos informations et vos photos, je crée votre site, puis on active les paiements ensemble.",
  },
  {
    q: "Faut-il un terminal de paiement ou du matériel ?",
    a: "Non. Tout se passe depuis votre téléphone avec WhatsApp. Le paiement se fait en ligne par carte, Apple Pay, Google Pay ou PayPal, ou en espèces à la réception.",
  },
  {
    q: "Comment je modifie mes produits, mes prix ou mes photos ?",
    a: "Vous gérez votre catalogue vous-même, simplement, sans compétence technique. Vous gardez la main à tout moment.",
  },
  {
    q: "Ai-je besoin de compétences techniques ?",
    a: "Aucune. Je m'occupe de la création et de la technique ; vous ne faites que gérer votre contenu et répondre sur WhatsApp.",
  },
  {
    q: "Est-ce que je garde mes clients actuels ?",
    a: "Oui. Rien ne change pour eux : ils continuent de vous écrire sur WhatsApp, comme avant.",
  },
  {
    q: "Le paiement en ligne est-il sûr ?",
    a: "Oui. Les paiements passent par Stripe, un leader mondial du paiement, et l'argent arrive directement sur votre compte bancaire.",
  },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-cream text-foreground">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 px-4 pb-20 pt-20 text-white">
        <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-teal-300/15 blur-3xl" />

        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <FadeIn>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-amber-200 backdrop-blur">
                🇬🇵 Pensé pour la Guadeloupe &amp; les Antilles
              </span>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                Votre site web à vous,
                <br className="hidden sm:block" /> vos commandes{" "}
                <span className="text-wa">sur WhatsApp</span>.
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mx-auto mt-5 max-w-xl text-lg text-emerald-50/90 lg:mx-0">
                Quel que soit votre métier, un mini-site à votre domaine,
                trouvable sur Google partout en Guadeloupe et aux Antilles,
                relié à votre WhatsApp Business. Vos clients commandent et
                paient en ligne — vous, vous restez sur WhatsApp.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
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
          <FadeIn delay={0.1} className="hidden justify-center lg:flex">
            <HeroPhone />
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
            cherchent sur Google — et ils vont voir ailleurs.
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
                pas et vont chez un concurrent.
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

      {/* Modularité */}
      <section id="metiers" className="mx-auto max-w-6xl px-4 py-20">
        <FadeIn>
          <h2 className="text-center text-3xl font-extrabold tracking-tight">
            Un site pour chaque métier
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-zinc-600">
            Le même socle, adapté à votre activité. Catalogue, options,
            réservation ou commande, paiement carte ou espèces : tout se
            configure selon votre métier.
          </p>
        </FadeIn>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          <FadeIn className="flex justify-center">
            <CommerceShowcase />
          </FadeIn>
          <div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {METIERS.map((m, i) => (
                <FadeIn key={m.label} delay={i * 0.03}>
                  <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3.5 shadow-sm ring-1 ring-black/5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                      {m.icon}
                    </div>
                    <span className="text-sm font-semibold text-zinc-700">
                      {m.label}
                    </span>
                  </div>
                </FadeIn>
              ))}
            </div>
            <FadeIn delay={0.1}>
              <p className="mt-6 rounded-2xl bg-emerald-50 px-5 py-4 text-sm text-emerald-900 ring-1 ring-emerald-100">
                <span className="font-bold">Et bien d&apos;autres.</span> Si
                votre activité se commande ou se réserve, elle a sa place ici.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Référencement */}
      <section id="referencement" className="bg-emerald-900 px-4 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <h2 className="text-center text-3xl font-extrabold tracking-tight">
              Trouvable partout en Guadeloupe &amp; aux Antilles
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-emerald-50/80">
              Votre site n&apos;est pas qu&apos;une jolie vitrine : il est fait
              pour apparaître dans les recherches locales, partout en
              Guadeloupe et aux Antilles.
            </p>
          </FadeIn>

          <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
            <div className="grid gap-4 sm:grid-cols-2">
              {SEO_POINTS.map((p, i) => (
                <FadeIn key={p.title} delay={i * 0.05}>
                  <div className="h-full rounded-3xl bg-white/10 p-6 backdrop-blur">
                    <h3 className="text-lg font-bold text-amber-300">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-emerald-50/90">{p.text}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
            <FadeIn className="flex justify-center">
              <SearchDemo />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section id="comment" className="mx-auto max-w-5xl px-4 py-20">
        <FadeIn>
          <h2 className="text-center text-3xl font-extrabold tracking-tight">
            Comment ça marche
          </h2>
          <p className="mt-3 text-center text-zinc-600">
            De la prise de contact à votre premier paiement en ligne.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="mt-12 rounded-3xl bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 p-6 text-white sm:p-10">
            <h3 className="text-center text-xl font-bold">
              Le parcours de vos clients
            </h3>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <ClientStep
                n={1}
                title="Il visite votre site"
                text="Il découvre votre catalogue, vos photos et vos prix."
              />
              <ClientStep
                n={2}
                title="Il remplit son panier"
                text="Il choisit ses produits et son mode de paiement : carte ou espèces."
              />
              <ClientStep
                n={3}
                title="La validation ouvre WhatsApp"
                text="Un message récapitulatif est prêt, il l'envoie en un clic."
              />
              <ClientStep
                n={4}
                title="Vous acceptez, il paie"
                text="Vous confirmez la commande, le client règle via le lien."
              />
            </div>
            <div className="mt-8 flex flex-col items-center gap-2">
              <Link
                href="/demo"
                className="flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-base font-bold text-emerald-800 shadow-lg transition hover:bg-emerald-50"
              >
                Voir la démo interactive
                <ArrowRight className="h-5 w-5" />
              </Link>
              <span className="text-sm text-emerald-100/80">
                Démo pour un restaurant · O&apos;Boucané — Resto
              </span>
            </div>
          </div>
        </FadeIn>

        <div className="mt-12 space-y-4">
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

      {/* FAQ */}
      <section id="faq" className="bg-white px-4 py-20">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h2 className="text-center text-3xl font-extrabold tracking-tight">
              Questions fréquentes
            </h2>
            <p className="mt-3 text-center text-zinc-600">
              Tout ce que vous devez savoir avant de vous lancer.
            </p>
          </FadeIn>
          <div className="mt-10 space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <FadeIn key={item.q} delay={i * 0.03}>
                <FaqItem q={item.q} a={item.a} />
              </FadeIn>
            ))}
          </div>
        </div>
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

      <footer className="bg-emerald-950 px-4 py-8 pb-24 text-sm text-emerald-200/60 md:pb-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 sm:flex-row">
          <p>© 2026 Ti-Boutik — Tous droits réservés.</p>
          <Link
            href="/mentions-legales"
            className="transition hover:text-white"
          >
            Mentions légales
          </Link>
        </div>
      </footer>

      <MobileContactBar />
    </div>
  );
}

function MobileContactBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      const goingDown = y > lastY;
      setVisible(goingDown && y > 400);
      lastY = y;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: "120%", opacity: 0 }}
      animate={{ y: visible ? 0 : "120%", opacity: visible ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed inset-x-0 bottom-0 z-50 p-3 md:hidden"
    >
      <a
        href={CONTACT_WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-wa py-4 text-base font-bold text-white shadow-lg shadow-green-600/40 transition hover:brightness-105"
      >
        <WhatsAppIcon className="h-5 w-5" />
        Prendre contact sur WhatsApp
      </a>
    </motion.div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-emerald-900/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-wa text-white">
            <WhatsAppIcon className="h-5 w-5" />
          </span>
          <span className="text-base font-bold tracking-tight">
            Ti-Boutik
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-emerald-100/80 lg:flex">
          <a href="#metiers" className="transition hover:text-white">
            Métiers
          </a>
          <a href="#referencement" className="transition hover:text-white">
            Référencement
          </a>
          <a href="#comment" className="transition hover:text-white">
            Comment ça marche
          </a>
          <a href="#faq" className="transition hover:text-white">
            FAQ
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
        <div className="pb-8">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="mt-1 text-zinc-600">{text}</p>
        </div>
      </div>
    </FadeIn>
  );
}

function ClientStep({
  n,
  title,
  text,
}: {
  n: number;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-400 text-sm font-bold text-emerald-950">
        {n}
      </div>
      <h4 className="mt-3 text-base font-bold">{title}</h4>
      <p className="mt-1.5 text-sm text-emerald-50/85">{text}</p>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);  return (
    <div className="overflow-hidden rounded-2xl bg-cream ring-1 ring-black/5">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span className="font-bold">{q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-zinc-500 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="px-5 pb-4 text-zinc-600">{a}</p>
      </motion.div>
    </div>
  );
}

function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
