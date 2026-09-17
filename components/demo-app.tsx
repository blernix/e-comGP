"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Storefront from "@/components/storefront";
import WhatsAppSim from "@/components/whatsapp-sim";
import { cartTotal, type CartItem, type Product } from "@/lib/menu";

export default function DemoApp() {
  const [view, setView] = useState<"store" | "whatsapp">("store");
  const [items, setItems] = useState<CartItem[]>([]);
  const [name, setName] = useState("");

  const total = cartTotal(items);

  const add = (product: Product) =>
    setItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id ? { ...i, qty: i.qty + 1 } : i,
        );
      }
      return [...prev, { product, qty: 1 }];
    });

  const increment = (id: string) =>
    setItems((prev) =>
      prev.map((i) => (i.product.id === id ? { ...i, qty: i.qty + 1 } : i)),
    );

  const decrement = (id: string) =>
    setItems((prev) =>
      prev
        .map((i) => (i.product.id === id ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0),
    );

  const remove = (id: string) =>
    setItems((prev) => prev.filter((i) => i.product.id !== id));

  const order = (customerName: string) => {
    setName(customerName);
    setView("whatsapp");
  };

  const back = () => {
    setView("store");
    setItems([]);
    setName("");
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {view === "store" ? (
          <motion.div
            key="store"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            <Storefront
              items={items}
              onAdd={add}
              onIncrement={increment}
              onDecrement={decrement}
              onRemove={remove}
              onOrder={order}
            />
          </motion.div>
        ) : (
          <motion.div
            key="whatsapp"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <WhatsAppSim
              items={items}
              name={name}
              total={total}
              onBack={back}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <span className="pointer-events-none fixed bottom-3 right-3 z-40 rounded-full bg-black/70 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur">
        Démo interactive
      </span>
    </div>
  );
}
