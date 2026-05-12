import { Star } from "lucide-react";
import a1 from "@/assets/avatar-1.jpg";
import a2 from "@/assets/avatar-2.jpg";
import a3 from "@/assets/avatar-3.jpg";

const reviews = [
  { avatar: a1, name: "Shelly Russel", text: "Just got my hands on some absolutely awesome plants, and I couldn't be happier!" },
  { avatar: a2, name: "Lula Rolfson", text: "Each one has its own unique charm and personality, and they've already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home." },
  { avatar: a3, name: "Carol Huels", text: "It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!" },
];

export function Reviews() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
      <h2 className="text-center font-poppins text-3xl font-bold sm:text-4xl">
        <span className="relative inline-block">
          <span className="absolute -left-4 -top-2 text-accent text-2xl">[</span>
          Customer Review
          <span className="absolute -right-4 -top-2 text-accent text-2xl">]</span>
        </span>
      </h2>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {reviews.map((r) => (
          <article key={r.name} className="rounded-3xl surface-card p-6">
            <div className="flex items-center gap-4">
              <img src={r.avatar} alt={r.name} className="h-12 w-12 rounded-full object-cover" />
              <div>
                <p className="font-poppins text-base font-semibold">{r.name}</p>
                <div className="mt-1 flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-current" />
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-foreground/75">{r.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
