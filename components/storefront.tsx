"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  X,
  Star,
  MapPin,
  Clock,
  Flame,
} from "lucide-react";
import {
  MENU,
  RESTAURANT,
  formatPrice,
  cartTotal,
  cartCount,
  type Product,
  type CartItem,
} from "@/lib/menu";
import { WhatsAppIcon } from "@/components/icons";

type StorefrontProps = {
  items: CartItem[];
  onAdd: (product: Product) => void;
  onIncrement: (productId: string) => void;
  onDecrement: (productId: string) => void;
  onRemove: (productId: string) => void;
  onOrder: (name: string) => void;
};

export default function Storefront({
  items,
  onAdd,
  onIncrement,
  onDecrement,
  onRemove,
  onOrder,
}: StorefrontProps) {
  const [cartOpen, setCartOpen] = useState(false);
  const total = cartTotal(items);
  const count = cartCount(items);

  const qtyOf = (id: string) =>
    items.find((i) => i.product.id === id)?.qty ?? 0;

  return (
    <div className="min-h-screen bg-cream text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-black/5 bg-cream/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center gap-3 px-4 py-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-amber-500 text-white shadow-md shadow-emerald-600/20">
            <Flame className="h-6 w-6" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-lg font-bold leading-tight tracking-tight">
              {RESTAURANT.name}
            </p>
            <p className="flex items-center gap-1 text-xs text-zinc-500">
              <MapPin className="h-3 w-3" />
              {RESTAURANT.city}
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Ouvert
          </span>
          <button
            onClick={() => setCartOpen(true)}
            className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-zinc-700 shadow-sm ring-1 ring-black/5 transition hover:bg-zinc-50"
            aria-label="Ouvrir le panier"
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-flame px-1 text-[11px] font-bold text-white">
                {count}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-3xl px-4 pt-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-600 px-6 py-8 text-white shadow-lg shadow-emerald-900/10">
          <div className="relative z-10">
            <div className="mb-3 inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur">
              <Star className="h-3.5 w-3.5 fill-amber-300 text-amber-300" />
              {RESTAURANT.rating} · {RESTAURANT.reviews} avis
            </div>
            <h1 className="text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
              {RESTAURANT.tagline}
            </h1>
            <p className="mt-2 flex items-center gap-2 text-sm text-emerald-50/90">
              <Clock className="h-4 w-4" />
              Commandez & payez par carte, tout arrive sur WhatsApp.
            </p>
          </div>
          <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-amber-400/30 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-10 -left-6 h-40 w-40 rounded-full bg-teal-300/20 blur-2xl" />
        </div>
      </section>

      {/* Catalogue */}
      <main className="mx-auto max-w-3xl px-4 pb-36 pt-8">
        <div className="mb-4 flex items-end justify-between">
          <h2 className="text-xl font-bold tracking-tight">Notre carte</h2>
          <span className="text-sm text-zinc-500">
            {MENU.length} plats maison
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {MENU.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              qty={qtyOf(product.id)}
              index={i}
              onAdd={onAdd}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
            />
          ))}
        </div>
      </main>

      {/* Floating cart bar */}
      <AnimatePresence>
        {count > 0 && (
          <motion.div
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 120, opacity: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
            className="fixed inset-x-0 bottom-0 z-40 px-4 pb-4"
          >
            <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 rounded-2xl bg-emerald-600 px-4 py-3 text-white shadow-2xl shadow-emerald-900/30">
              <button
                onClick={() => setCartOpen(true)}
                className="flex items-center gap-3 text-left"
              >
                <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
                  <ShoppingBag className="h-5 w-5" />
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[11px] font-bold text-emerald-700">
                    {count}
                  </span>
                </span>
                <span>
                  <span className="block text-[11px] uppercase tracking-wide text-emerald-100">
                    Voir le panier
                  </span>
                  <span className="block text-lg font-bold leading-tight">
                    {formatPrice(total)}
                  </span>
                </span>
              </button>
              <button
                onClick={() => setCartOpen(true)}
                className="rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-emerald-700 transition hover:bg-emerald-50"
              >
                Commander
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cart drawer */}
      <CartDrawer
        open={cartOpen}
        items={items}
        total={total}
        onClose={() => setCartOpen(false)}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onRemove={onRemove}
        onOrder={onOrder}
      />
    </div>
  );
}

function ProductCard({
  product,
  qty,
  index,
  onAdd,
  onIncrement,
  onDecrement,
}: {
  product: Product;
  qty: number;
  index: number;
  onAdd: (p: Product) => void;
  onIncrement: (id: string) => void;
  onDecrement: (id: string) => void;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.4, ease: "easeOut" }}
      className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition hover:shadow-md"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        {product.tag && (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-bold text-emerald-700 backdrop-blur">
            {product.tag}
          </span>
        )}
      </div>
      <div className="flex items-start justify-between gap-3 p-4">
        <div className="min-w-0">
          <h3 className="truncate text-base font-bold tracking-tight">
            {product.name}
          </h3>
          <p className="mt-1 line-clamp-2 text-sm text-zinc-500">
            {product.description}
          </p>
          <p className="mt-2 text-lg font-extrabold text-emerald-700">
            {formatPrice(product.price)}
          </p>
        </div>
        <div className="shrink-0">
          {qty === 0 ? (
            <button
              onClick={() => onAdd(product)}
              className="flex h-10 items-center gap-1.5 rounded-full bg-emerald-600 px-4 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-700 active:scale-95"
            >
              <Plus className="h-4 w-4" />
              Ajouter
            </button>
          ) : (
            <div className="flex items-center gap-1 rounded-full bg-emerald-600 p-1 text-white shadow-sm">
              <button
                onClick={() => onDecrement(product.id)}
                className="flex h-8 w-8 items-center justify-center rounded-full transition hover:bg-emerald-700 active:scale-90"
                aria-label="Retirer"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-6 text-center text-sm font-bold">{qty}</span>
              <button
                onClick={() => onIncrement(product.id)}
                className="flex h-8 w-8 items-center justify-center rounded-full transition hover:bg-emerald-700 active:scale-90"
                aria-label="Ajouter"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function CartDrawer({
  open,
  items,
  total,
  onClose,
  onIncrement,
  onDecrement,
  onRemove,
  onOrder,
}: {
  open: boolean;
  items: CartItem[];
  total: number;
  onClose: () => void;
  onIncrement: (id: string) => void;
  onDecrement: (id: string) => void;
  onRemove: (id: string) => void;
  onOrder: (name: string) => void;
}) {
  const [name, setName] = useState("");

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 32 }}
            className="fixed inset-x-0 bottom-0 z-50 mx-auto max-w-3xl"
          >
            <div className="flex max-h-[88vh] flex-col rounded-t-3xl bg-white shadow-2xl">
              <div className="flex items-center justify-between px-5 py-4">
                <h2 className="text-lg font-bold tracking-tight">
                  Votre panier
                </h2>
                <button
                  onClick={onClose}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 transition hover:bg-zinc-200"
                  aria-label="Fermer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="no-scrollbar flex-1 overflow-y-auto px-5">
                {items.length === 0 ? (
                  <p className="py-10 text-center text-sm text-zinc-400">
                    Votre panier est vide.
                  </p>
                ) : (
                  <ul className="space-y-3">
                    <AnimatePresence initial={false}>
                      {items.map(({ product, qty }) => (
                        <motion.li
                          key={product.id}
                          layout
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="flex items-center gap-3 overflow-hidden rounded-2xl border border-black/5 p-3"
                        >
                          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-zinc-100">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              sizes="56px"
                              className="object-cover"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-semibold">
                              {product.name}
                            </p>
                            <p className="text-sm text-zinc-500">
                              {formatPrice(product.price)}
                            </p>
                          </div>
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => onDecrement(product.id)}
                              className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 transition hover:bg-zinc-200"
                              aria-label="Retirer"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="w-6 text-center text-sm font-bold">
                              {qty}
                            </span>
                            <button
                              onClick={() => onIncrement(product.id)}
                              className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 transition hover:bg-zinc-200"
                              aria-label="Ajouter"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          <button
                            onClick={() => onRemove(product.id)}
                            className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 transition hover:bg-red-50 hover:text-red-500"
                            aria-label="Supprimer"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </motion.li>
                      ))}
                    </AnimatePresence>
                  </ul>
                )}
              </div>

              {items.length > 0 && (
                <div className="space-y-3 border-t border-black/5 px-5 py-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zinc-500">Total</span>
                    <span className="text-xl font-extrabold">
                      {formatPrice(total)}
                    </span>
                  </div>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Votre nom & prénom"
                    className="w-full rounded-2xl border border-black/10 bg-zinc-50 px-4 py-3 text-sm outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-500/20"
                  />
                  <button
                    onClick={() => onOrder(name)}
                    className="flex w-full items-center justify-center gap-2 rounded-2xl bg-wa py-3.5 text-base font-bold text-white shadow-lg shadow-green-600/25 transition hover:brightness-105 active:scale-[0.99]"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    Commander via WhatsApp
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
