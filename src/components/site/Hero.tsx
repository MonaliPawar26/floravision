import { Play, ArrowRight, Star } from "lucide-react";
import topiary from "@/assets/hero-topiary.jpg";
import aglaonema from "@/assets/plant-aglaonema.png";
import avatar from "@/assets/avatar-1.jpg";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={topiary} alt="" className="h-full w-full object-cover" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background" />
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-32 pt-28 sm:px-8 lg:px-12 lg:pt-32">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h1 className="font-poppins text-6xl font-extrabold leading-[1] text-foreground sm:text-7xl lg:text-8xl">
              Earth's Exhale
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-foreground/85">
              "Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.
            </p>

            <div className="mt-7 flex items-center gap-4">
              <button className="rounded-md border border-foreground/70 bg-transparent px-7 py-2.5 text-sm font-medium text-foreground transition hover:border-accent hover:text-accent">
                Buy Now
              </button>
              <button className="group flex items-center gap-2 text-sm font-medium text-foreground">
                <span className="grid h-9 w-9 place-items-center rounded-full border border-foreground/60 transition group-hover:border-accent group-hover:text-accent">
                  <Play className="h-3.5 w-3.5 fill-current" />
                </span>
                Live Demo...
              </button>
            </div>

            <div className="mt-16 flex max-w-sm items-start gap-3 rounded-2xl surface-card p-4">
              <img src={avatar} alt="Ronnie Hamill" className="h-10 w-10 shrink-0 rounded-full object-cover" />
              <div>
                <p className="text-sm font-semibold">Ronnie Hamill</p>
                <div className="mt-1 flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-current" />
                  ))}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-foreground/75">
                  I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <div className="w-full max-w-[320px] rounded-3xl surface-card p-5">
              <div className="overflow-hidden rounded-2xl">
                <img src={aglaonema} alt="Aglaonema plant" className="h-56 w-full object-contain" width={400} height={400} loading="lazy" />
              </div>
              <p className="mt-4 text-xs text-foreground/70">Indoor Plant</p>
              <div className="mt-1 flex items-center justify-between gap-3">
                <p className="font-poppins text-xl font-semibold">Aglaonema plant</p>
                <button aria-label="View" className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-foreground/40 transition hover:border-accent hover:text-accent">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              <button className="mt-4 rounded-md border border-foreground/60 px-5 py-1.5 text-sm font-medium transition hover:border-accent hover:text-accent">
                Buy Now
              </button>
              <div className="mt-4 flex items-center gap-1.5">
                <span className="h-1 w-5 rounded-full bg-foreground" />
                <span className="h-1 w-1 rounded-full bg-foreground/40" />
                <span className="h-1 w-1 rounded-full bg-foreground/40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
