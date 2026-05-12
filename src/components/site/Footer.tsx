import { useState } from "react";
import logoPot from "@/assets/logo-pot.png";

export function Footer() {
  const [email, setEmail] = useState("");
  return (
    <footer className="border-t border-border/40">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1.1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <img src={logoPot} alt="" className="h-10 w-10 object-contain" />
              <span className="font-poppins text-2xl font-bold">FloraVision.</span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-foreground/85">
              &ldquo;From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment.&rdquo;
            </p>
          </div>

          <div>
            <h4 className="font-poppins text-base font-semibold">Quick Link's</h4>
            <ul className="mt-4 space-y-2 text-sm text-foreground/85">
              <li><a href="#" className="underline underline-offset-4 hover:text-accent">Home</a></li>
              <li><a href="#" className="underline underline-offset-4 hover:text-accent">Type's Of plant's</a></li>
              <li><a href="#" className="underline underline-offset-4 hover:text-accent">Contact</a></li>
              <li><a href="#" className="underline underline-offset-4 hover:text-accent">Privacy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-poppins text-base font-semibold">For Every Update.</h4>
            <form
              className="mt-4 flex max-w-md items-center gap-2 rounded-md border border-foreground/30 bg-transparent p-1 pl-4"
              onSubmit={(e) => { e.preventDefault(); setEmail(""); }}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                className="flex-1 bg-transparent py-1.5 text-sm outline-none placeholder:text-foreground/60"
              />
              <button type="submit" className="rounded-[3px] bg-foreground px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-background transition hover:bg-accent hover:text-accent-foreground">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-center justify-between gap-4 md:flex-row">
          <div className="flex gap-7 text-sm font-bold text-foreground">
            <a href="#" className="hover:text-accent">FB</a>
            <a href="#" className="hover:text-accent">TW</a>
            <a href="#" className="hover:text-accent">LI</a>
          </div>
          <p className="text-sm text-foreground/85">FloraVision © all right reserve</p>
        </div>
      </div>
    </footer>
  );
}
