import { Link } from "@tanstack/react-router";
import { experiences, type Experience } from "@/data/site";
import { EnquirySection } from "./EnquirySection";

export function CategoryPage({ experience }: { experience: Experience }) {
  const others = experiences.filter((item) => item.slug !== experience.slug).slice(0, 4);

  return (
    <main>
      <section className="relative">
        <img
          src={experience.image}
          alt={experience.title}
          width={800}
          height={600}
          className="w-full h-[52vh] min-h-[360px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12 pb-8">
            <p className="text-accent font-medium text-xs sm:text-sm tracking-[0.18em] uppercase mb-3">
              {experience.duration}
            </p>
            <h1 className="font-display font-medium text-sand text-4xl sm:text-5xl leading-[1.04] tracking-tight text-balance max-w-[24ch]">
              {experience.title}
            </h1>
            <p className="mt-3 text-sand/80 text-sm sm:text-base max-w-[52ch] text-pretty">
              {experience.lead}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12 py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16">
            <p className="font-display font-medium text-xl sm:text-2xl leading-snug text-ink text-pretty">
              {experience.intro}
            </p>
            <dl className="grid gap-6">
              {experience.highlights.map((highlight) => (
                <div key={highlight.title} className="border-t border-ink/10 pt-4">
                  <dt className="font-display font-medium text-lg text-ink">{highlight.title}</dt>
                  <dd className="mt-1.5 text-sm text-ink/70 text-pretty">{highlight.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-clay/40 border-y border-ink/10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12 py-16 md:py-20">
          <div className="mb-9">
            <p className="text-brand font-medium text-xs sm:text-sm tracking-[0.18em] uppercase mb-3">
              What it costs
            </p>
            <h2 className="font-display font-medium text-3xl sm:text-4xl leading-tight tracking-tight text-ink text-balance">
              Priced in USD &amp; KES
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {experience.packages.map((pack) => (
              <article
                key={pack.name}
                className="bg-sand ring-1 ring-ink/10 rounded-xl p-5 flex flex-col"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium tracking-wide uppercase text-brand">
                    {experience.title}
                  </span>
                  <span className="text-xs text-mute">{pack.duration}</span>
                </div>
                <h3 className="mt-2 font-display font-medium text-xl text-ink text-balance">{pack.name}</h3>
                <p className="mt-1.5 text-sm text-ink/70 text-pretty flex-1">{pack.summary}</p>
                <div className="mt-4 flex items-end justify-between pt-4 border-t border-ink/10">
                  <div>
                    <p className="text-xs text-mute">from</p>
                    <p className="font-display font-medium text-2xl text-ink leading-none">{pack.usd}</p>
                    <p className="text-xs text-mute mt-1">{pack.kes}</p>
                  </div>
                  <Link to="/contact" className="text-sm font-medium text-brand hover:text-ink transition-colors">
                    Enquire &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12 py-14 md:py-16">
          <h2 className="font-display font-medium text-2xl sm:text-3xl tracking-tight text-ink mb-7">
            Pair it with
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {others.map((item) => (
              <Link
                key={item.slug}
                to={item.path}
                className="group bg-clay/30 ring-1 ring-ink/10 rounded-xl overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="p-4">
                  <h3 className="font-display font-medium text-base sm:text-lg text-ink">{item.title}</h3>
                  <p className="mt-1 text-sm text-mute">{item.duration}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <EnquirySection defaultInterest={experience.title} />
    </main>
  );
}
