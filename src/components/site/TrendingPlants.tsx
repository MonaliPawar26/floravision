import { ShoppingBag } from "lucide-react";
import hosta from "@/assets/plant-hosta.png";
import agaveTeal from "@/assets/plant-agave-teal.png";
import bg from "@/assets/trendy-bg.jpg";

type Item = {
  image: string;
  title: string;
  desc: string;
  price: string;
  reverse?: boolean;
};

const items: Item[] = [
  {
    image: hosta,
    title: "For Your Desks Decorations",
    desc: "I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!",
    price: "Rs. 599/-",
  },
  {
    image: agaveTeal,
    title: "For Your Desks Decorations",
    desc: "The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming",
    price: "Rs. 399/-",
    reverse: true,
  },
];

export function TrendingPlants() {
  return (
    <section className="relative isolate overflow-hidden py-20">
      <div className="absolute inset-0 -z-10">
        <img src={bg} alt="" className="h-full w-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <h2 className="text-center font-poppins text-3xl font-bold sm:text-4xl">
          <span className="relative inline-block">
            <span className="absolute -left-4 -top-2 text-accent text-2xl">[</span>
            Our Trendy plants
            <span className="absolute -right-4 -top-2 text-accent text-2xl">]</span>
          </span>
        </h2>

        <div className="mt-16 space-y-20">
          {items.map((it, idx) => (
            <article
              key={idx}
              className={`relative rounded-[3rem] surface-card px-8 py-10 sm:px-12 ${
                it.reverse ? "md:pr-56" : "md:pl-56"
              }`}
            >
              <img
                src={it.image}
                alt={it.title}
                className={`pointer-events-none absolute -top-16 h-72 w-72 object-contain drop-shadow-2xl sm:h-80 sm:w-80 ${
                  it.reverse ? "right-0 md:-right-8" : "left-0 md:-left-8"
                }`}
                loading="lazy"
              />
              <div className={it.reverse ? "max-w-md" : "max-w-md md:ml-auto"}>
                <h3 className="font-poppins text-2xl font-semibold">{it.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">{it.desc}</p>
                <p className="mt-4 font-poppins text-xl font-semibold">{it.price}</p>
                <div className="mt-5 flex items-center gap-3">
                  <button className="rounded-md border border-foreground/60 px-7 py-2 text-sm font-medium transition hover:border-accent hover:text-accent">
                    Explore
                  </button>
                  <button aria-label="Add to bag" className="grid h-9 w-9 place-items-center rounded-md border border-foreground/40 transition hover:border-accent hover:text-accent">
                    <ShoppingBag className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
