import { Link } from "@tanstack/react-router";

export function StickyEnquire() {
  return (
    <Link
      to="/contact"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 bg-brand text-sand text-sm font-medium py-2.5 pr-4 pl-3 rounded-full ring-1 ring-sand/30 shadow-lg hover:bg-ink transition-colors"
    >
      <span className="size-5 grid place-items-center rounded-full bg-accent text-ink font-display font-semibold text-xs leading-none shrink-0">
        W
      </span>
      Enquire
    </Link>
  );
}
