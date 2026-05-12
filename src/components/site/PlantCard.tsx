import { ShoppingBag } from "lucide-react";

export type Plant = {
  image: string;
  name: string;
  desc: string;
  price: string;
};

export function PlantCard({ plant }: { plant: Plant }) {
  return (
    <article className="relative mt-24 rounded-3xl surface-card px-6 pb-6 pt-28">
      <img
        src={plant.image}
        alt={plant.name}
        className="pointer-events-none absolute -top-20 left-1/2 h-44 w-44 -translate-x-1/2 object-contain drop-shadow-2xl"
        loading="lazy"
      />
      <h3 className="font-poppins text-lg font-semibold">{plant.name}</h3>
      <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-foreground/70">{plant.desc}</p>
      <div className="mt-4 flex items-center justify-between">
        <p className="font-poppins text-base font-semibold">{plant.price}</p>
        <button
          aria-label="Add to bag"
          className="grid h-8 w-8 place-items-center rounded-md border border-foreground/30 transition hover:border-accent hover:text-accent"
        >
          <ShoppingBag className="h-4 w-4" />
        </button>
      </div>
    </article>
  );
}
