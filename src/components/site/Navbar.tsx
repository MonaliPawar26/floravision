import { Link } from "@tanstack/react-router";
import { Search, ShoppingBag, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import logoPot from "@/assets/logo-pot.png";

const links = [
  { label: "Home", to: "/" },
  { label: "Plants Type", to: "/", caret: true },
  { label: "More", to: "/" },
  { label: "Contact", to: "/" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <Link to="/" className="flex items-center gap-2 text-foreground">
          <img src={logoPot} alt="" className="h-7 w-7 object-contain" />
          <span className="font-poppins text-lg font-bold tracking-tight">FloraVision.</span>
        </Link>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <Link to={l.to} className="flex items-center gap-1 text-sm font-medium text-foreground/90 transition hover:text-accent">
                {l.label}
                {l.caret && <ChevronDown className="h-3 w-3" />}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-5 md:flex">
          <button aria-label="Search" className="text-foreground/85 transition hover:text-accent">
            <Search className="h-5 w-5" />
          </button>
          <button aria-label="Cart" className="text-foreground/85 transition hover:text-accent">
            <ShoppingBag className="h-5 w-5" />
          </button>
          <button aria-label="Menu" className="text-foreground/85 transition hover:text-accent">
            <Menu className="h-5 w-5" />
          </button>
        </div>

        <button aria-label="Toggle menu" className="md:hidden" onClick={() => setOpen((v) => !v)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="mx-5 rounded-2xl border border-border bg-card/95 p-5 backdrop-blur md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.label}>
                <Link to={l.to} onClick={() => setOpen(false)} className="block text-base font-medium text-foreground/90">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
