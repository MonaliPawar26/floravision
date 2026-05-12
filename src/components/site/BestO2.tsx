import { ChevronLeft, ChevronRight } from "lucide-react";
import o2 from "@/assets/plant-o2.png";

export function BestO2() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
      <h2 className="text-center font-poppins text-3xl font-bold sm:text-4xl">
        <span className="relative inline-block">
          <span className="absolute -left-4 -top-2 text-accent text-2xl">[</span>
          Our Best o2
          <span className="absolute -right-4 -top-2 text-accent text-2xl">]</span>
        </span>
      </h2>

      <article className="relative mt-16 rounded-[3rem] surface-card px-8 py-10 sm:px-12 md:pl-[28rem]">
        <img
          src={o2}
          alt="O2 producing plant"
          className="pointer-events-none absolute -top-10 left-0 h-[420px] w-[420px] object-contain drop-shadow-2xl md:-left-8"
          loading="lazy"
        />
        <div className="max-w-lg md:ml-auto">
          <h3 className="font-poppins text-2xl font-semibold leading-tight">
            We Have Small And Best O2 Plants Collection's
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-foreground/80">
            Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-foreground/80">
            Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <button className="rounded-md border border-foreground/60 px-7 py-2 text-sm font-medium transition hover:border-accent hover:text-accent">
              Explore
            </button>
            <div className="ml-auto flex items-center gap-3 text-sm text-foreground/70">
              <button aria-label="Previous" className="transition hover:text-accent">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <span className="font-mono text-xs">01<span className="text-foreground/40">/04</span></span>
              <button aria-label="Next" className="transition hover:text-accent">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </article>

      <div className="mt-8 flex justify-center gap-2">
        <span className="h-1 w-6 rounded-full bg-foreground/70" />
        <span className="h-1 w-1.5 rounded-full bg-foreground/30" />
        <span className="h-1 w-1.5 rounded-full bg-foreground/30" />
      </div>
    </section>
  );
}
