import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { company } from "@/data/site";

const navItems = [
  { to: "/destinations", label: "Destinations" },
  { to: "/experiences", label: "Experiences" },
  { to: "/about", label: "Why us" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-sand/90 backdrop-blur-sm border-b border-ink/10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3">
          <Link to="/" className="flex min-w-0 items-center gap-2.5">
            <span className="size-8 shrink-0 grid place-items-center bg-brand text-sand rounded-md font-display font-semibold text-lg leading-none">
              A
            </span>
            <span className="truncate font-display font-medium text-base sm:text-lg tracking-tight text-ink">
              {company.name}
            </span>
          </Link>

          <div className="flex items-center gap-3 sm:gap-6">
            <nav className="hidden md:flex items-center gap-7 text-sm text-ink/80">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  activeProps={{ className: "text-brand" }}
                  className="hover:text-brand transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              to="/contact"
              className="bg-ink text-sand text-sm font-medium px-4 py-2 rounded-md hover:bg-brand transition-colors shrink-0"
            >
              Enquire
            </Link>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-label="Toggle menu"
              className="md:hidden text-sm font-medium text-ink/70 shrink-0"
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        {open ? (
          <nav className="md:hidden flex flex-col gap-1 pb-4 text-sm text-ink/80">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-2 border-t border-ink/10 hover:text-brand transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  );
}
