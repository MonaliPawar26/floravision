import { PlantCard, type Plant } from "./PlantCard";
import aglaonema from "@/assets/plant-aglaonema.png";
import plantain from "@/assets/plant-plantain.png";
import cactus from "@/assets/plant-cactus.png";
import swiss from "@/assets/plant-swisscheese.png";
import sansevieria from "@/assets/plant-sansevieria.png";
import agave from "@/assets/plant-agave.png";

const plants: Plant[] = [
  {
    image: aglaonema,
    name: "Aglaonema plant",
    desc: "The Aglaonema plant, commonly known as Chinese Evergreen, known for its attractive foliage and ease of care.",
    price: "Rs. 300/-",
  },
  {
    image: plantain,
    name: "Plantain Lilies",
    desc: "Hostas are primarily grown for their lush, ornamental leaves, which come in a wide variety of shapes, sizes.",
    price: "Rs. 380/-",
  },
  {
    image: cactus,
    name: "Cactus",
    desc: "It is known for thrive in arid environments.",
    price: "Rs. 259/-",
  },
  {
    image: swiss,
    name: "Swiss cheese Plant",
    desc: "It is a popular tropical houseplant known for its distinctive, perforated leaves.",
    price: "Rs. 400/-",
  },
  {
    image: sansevieria,
    name: "Sansevieria plant",
    desc: "It is a popular indoor plant admired for its lasting appearance and low-maintenance nature.",
    price: "Rs. 450/-",
  },
  {
    image: agave,
    name: "Agave plant",
    desc: "The Agave plant is a genus of succulents popular for its striking rosette of thick, fleshy leaves and architectural forms.",
    price: "Rs. 359/-",
  },
];

export function TopSelling() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
      <h2 className="text-center font-poppins text-3xl font-bold sm:text-4xl">
        <span className="relative inline-block">
          <span className="absolute -left-3 -top-2 text-accent">[</span>
          Our Top Selling Plants
          <span className="absolute -right-3 -top-2 text-accent">]</span>
        </span>
      </h2>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {plants.map((p) => (
          <PlantCard key={p.name} plant={p} />
        ))}
      </div>
    </section>
  );
}
