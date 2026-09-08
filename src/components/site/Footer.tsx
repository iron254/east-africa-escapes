import { Link } from "@tanstack/react-router";
import { company, experiences } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-ink text-sand/70">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="size-7 shrink-0 grid place-items-center bg-brand text-sand rounded-md font-display font-semibold text-sm leading-none">
              A
            </span>
            <span className="font-display font-medium text-sand">{company.name}</span>
          </div>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <Link to="/destinations" className="hover:text-sand transition-colors">
              Destinations
            </Link>
            {experiences.slice(0, 5).map((experience) => (
              <Link key={experience.slug} to={experience.path} className="hover:text-sand transition-colors">
                {experience.title}
              </Link>
            ))}
            <Link to="/contact" className="hover:text-sand transition-colors">
              Enquire
            </Link>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-sand/15 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-sand/50">
            Licence {company.licence} · {company.bases}
          </p>
          <p className="text-xs text-sand/50">
            <a href={company.phoneHref} className="hover:text-sand transition-colors">
              {company.phoneDisplay}
            </a>
            {" · "}
            <a href={`mailto:${company.email}`} className="hover:text-sand transition-colors">
              {company.email}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
