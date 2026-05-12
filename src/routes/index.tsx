import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TrendingPlants } from "@/components/site/TrendingPlants";
import { TopSelling } from "@/components/site/TopSelling";
import { Reviews } from "@/components/site/Reviews";
import { BestO2 } from "@/components/site/BestO2";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "FloraVision — Earth's Exhale | Indoor & Outdoor Plants" },
      {
        name: "description",
        content:
          "Discover beautiful indoor & outdoor plants at FloraVision. Trending plants, top sellers, and oxygen-producing greens to elevate your home.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <TrendingPlants />
      <TopSelling />
      <Reviews />
      <BestO2 />
      <Footer />
    </main>
  );
}
