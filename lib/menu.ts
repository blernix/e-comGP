export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  tag?: string;
};

export type CartItem = {
  product: Product;
  qty: number;
};

export type PaymentMethod = "card" | "cash";

export const RESTAURANT = {
  name: "O'Boucané",
  subtitle: "Resto Pays",
  tagline: "Les saveurs de la Guadeloupe, commandées sur WhatsApp.",
  city: "Pointe-à-Pitre, Guadeloupe",
  address: "Rue Frébault, 97110 Pointe-à-Pitre, Guadeloupe",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Rue+Fr%C3%A9bault+Pointe-%C3%A0-Pitre+Guadeloupe",
  phone: "+590 690 12 34 56",
  open: true,
  opensAt: "11h30",
  closesAt: "22h00",
  rating: 4.9,
  reviews: 212,
};

export const MENU: Product[] = [
  {
    id: "poulet-boucane",
    name: "Poulet Boucané",
    description: "Poulet fumé au feu de bois, mariné aux épices créoles, riz pois et sauce chien.",
    price: 18,
    image: "/poulet.jpeg",
    tag: "Signature",
  },
  {
    id: "fricassee-chatrou",
    name: "Fricassée de Chatrou",
    description: "Poulpe mijoté aux tomates, citron vert, oignons pays et piment végétarien.",
    price: 22,
    image: "/fricassee.jpeg",
    tag: "Du jour",
  },
  {
    id: "lambi-grille",
    name: "Lambi Grillé",
    description: "Lambi mariné au citron et grillé à la braise, servi avec dombrés et légumes pays.",
    price: 25,
    image: "/lambi.jpeg",
    tag: "Spécialité",
  },
  {
    id: "jus-local",
    name: "Jus Local",
    description: "Jus frais du moment : goyave, maracudja ou corossol, pressé à la commande.",
    price: 5,
    image: "/jus.jpeg",
    tag: "Frais",
  },
];

export function formatPrice(value: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}

export function cartTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.product.price * item.qty, 0);
}

export function cartCount(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.qty, 0);
}

export function buildStripeLink(total: number): string {
  const amount = Math.round(total * 100);
  return `https://pay.stripe.com/oboucane/${amount}_demo_${Math.random()
    .toString(36)
    .slice(2, 10)}`;
}

export function buildOrderLines(
  items: CartItem[],
  name: string,
  total: number,
  link: string,
): string[] {
  const lines: string[] = [];
  lines.push("🧾 Nouvelle commande");
  lines.push("");
  for (const item of items) {
    lines.push(
      `• ${item.qty} × ${item.product.name} — ${formatPrice(item.product.price * item.qty)}`,
    );
  }
  lines.push("");
  lines.push(`Total : ${formatPrice(total)}`);
  lines.push("");
  lines.push(`👤 ${name.trim() || "Client"}`);
  lines.push(`💳 ${link}`);
  return lines;
}
