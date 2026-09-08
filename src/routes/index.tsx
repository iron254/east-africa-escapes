import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import type { FormEvent } from "react";

import heroImage from "@/assets/hero.jpg";
import guestImage from "@/assets/guest.jpg";
import { destinations, experiences, signatureItineraries, company } from "@/data/site";
import { EnquirySection } from "@/components/site/EnquirySection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Acacia Trails — Kenya & East Africa Tours and Safaris" },
      {
        name: "description",
        content:
          "Licensed Kenyan tour operator: wildlife safaris, beach holidays, balloon flights, cultural and mountain trips across Kenya, Tanzania, Uganda and Rwanda. Prices in USD and KES.",
      },
      { property: "og:title", content: "Acacia Trails — Kenya & East Africa Tours and Safaris" },
      {
        property: "og:description",
        content:
          "Safaris, beaches, balloon flights and tailored group travel across East Africa, planned by guides who live here.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const navigate = useNavigate();

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate({ to: "/contact" });
  }

  const lead = destinations[0]!;
  const rest = destinations.slice(1);

  return (
    <main>
      {/* HERO */}
      <section className="relative">
        <img
          src={heroImage}
          alt="Dawn light over acacia savannah seen from a hot-air balloon basket"
          width={1920}
          height={1080}
          className="w-full h-[78vh] min-h-[560px] object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink/85 via-ink/45 to-transparent" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12 pb-7">
            <div className="flex flex-wrap items-end gap-x-10 gap-y-5">
              <div className="max-w-[46ch]">
                <p className="text-accent font-medium text-xs sm:text-sm tracking-[0.18em] uppercase mb-3">
                  Kenya &amp; East Africa · Est. 2009
                </p>
                <h1 className="font-display font-medium text-sand text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-tight text-balance">
                  Wander the savannah at first light
                </h1>
              </div>
              <form
                onSubmit={handleSearch}
                className="flex flex-1 min-w-[280px] max-w-xl bg-sand ring-1 ring-ink/10 rounded-xl p-2 gap-2"
              >
                <input
                  type="text"
                  aria-label="When are you travelling"
                  placeholder="When are you travelling?"
                  className="flex-1 min-w-0 bg-clay/60 rounded-md px-3 py-2.5 text-sm text-ink placeholder:text-mute focus:outline-none focus:ring-2 focus:ring-accent/60"
                />
                <select
                  aria-label="Travellers"
                  className="bg-clay/60 rounded-md px-3 py-2.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-accent/60"
                >
                  <option>Travellers</option>
                  <option>1</option>
                  <option>2</option>
                  <option>4</option>
                  <option>8+</option>
                </select>
                <button
                  type="submit"
                  className="bg-brand text-sand text-sm font-medium px-5 py-2.5 rounded-md hover:bg-ink transition-colors shrink-0"
                >
                  Find my trip
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section id="dest" className="bg-sand">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12 py-16 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div className="max-w-[40ch]">
              <p className="text-brand font-medium text-xs sm:text-sm tracking-[0.18em] uppercase mb-3">
                Destinations
              </p>
              <h2 className="font-display font-medium text-3xl sm:text-4xl leading-tight tracking-tight text-ink text-balance">
                Where the light turns golden
              </h2>
            </div>
            <Link
              to="/destinations"
              className="text-sm font-medium text-ink/70 hover:text-brand transition-colors underline underline-offset-4 decoration-ink/20"
            >
              View all regions &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <div className="col-span-12 md:col-span-7 group">
              <img
                src={lead.image}
                alt={`${lead.name}, ${lead.country}`}
                loading="lazy"
                width={1080}
                height={1080}
                className="w-full aspect-[16/11] md:aspect-[4/3] object-cover rounded-xl"
              />
              <div className="flex items-baseline justify-between mt-4">
                <h3 className="font-display font-medium text-2xl text-ink text-balance">{lead.name}</h3>
                <span className="text-sm text-mute">{lead.country}</span>
              </div>
              <p className="mt-1.5 text-sm text-ink/70 text-pretty max-w-[42ch]">{lead.body}</p>
            </div>

            {rest.map((destination, index) => (
              <div
                key={destination.name}
                className={
                  index === 2
                    ? "col-span-6 md:col-span-7 group"
                    : "col-span-6 md:col-span-5 group"
                }
              >
                <img
                  src={destination.image}
                  alt={`${destination.name}, ${destination.country}`}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className={
                    index === 2
                      ? "w-full aspect-[16/10] object-cover rounded-xl"
                      : "w-full aspect-[4/5] md:aspect-[3/4] object-cover rounded-xl"
                  }
                />
                <div className="flex items-baseline justify-between mt-4">
                  <h3 className="font-display font-medium text-xl text-ink">{destination.name}</h3>
                  <span className="text-sm text-mute">{destination.country}</span>
                </div>
                <p className="mt-1.5 text-sm text-ink/70 text-pretty">{destination.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCES RAIL */}
      <section id="cat" className="bg-clay/40 border-y border-ink/10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12 py-16 md:py-20">
          <div className="mb-9">
            <p className="text-brand font-medium text-xs sm:text-sm tracking-[0.18em] uppercase mb-3">
              Experiences
            </p>
            <h2 className="font-display font-medium text-3xl sm:text-4xl leading-tight tracking-tight text-ink text-balance">
              Nine ways into East Africa
            </h2>
          </div>
          <div className="overflow-x-auto -mx-5 px-5">
            <div className="flex gap-4 sm:gap-5 min-w-max">
              {experiences.map((experience) => (
                <Link
                  key={experience.slug}
                  to={experience.path}
                  className="group w-64 shrink-0 bg-sand ring-1 ring-ink/10 rounded-xl overflow-hidden"
                >
                  <img
                    src={experience.image}
                    alt={experience.title}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="p-4">
                    <h3 className="font-display font-medium text-lg text-ink">{experience.title}</h3>
                    <p className="mt-1 text-sm text-mute">{experience.duration}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ITINERARIES */}
      <section id="itins" className="bg-sand">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12 py-16 md:py-24">
          <div className="mb-10">
            <p className="text-brand font-medium text-xs sm:text-sm tracking-[0.18em] uppercase mb-3">
              Signature itineraries
            </p>
            <h2 className="font-display font-medium text-3xl sm:text-4xl leading-tight tracking-tight text-ink text-balance">
              Built in-house, priced in USD &amp; KES
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {signatureItineraries.map((itinerary) => (
              <article
                key={itinerary.name}
                className="bg-clay/30 ring-1 ring-ink/10 rounded-xl overflow-hidden flex flex-col"
              >
                <img
                  src={itinerary.image}
                  alt={itinerary.name}
                  loading="lazy"
                  width={896}
                  height={560}
                  className="w-full aspect-[16/10] object-cover"
                />
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium tracking-wide uppercase text-brand">
                      {itinerary.category}
                    </span>
                    <span className="text-xs text-mute">{itinerary.duration}</span>
                  </div>
                  <h3 className="mt-2 font-display font-medium text-xl text-ink text-balance">
                    {itinerary.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-ink/70 text-pretty flex-1">{itinerary.body}</p>
                  <div className="mt-4 flex items-end justify-between pt-4 border-t border-ink/10">
                    <div>
                      <p className="text-xs text-mute">from</p>
                      <p className="font-display font-medium text-2xl text-ink leading-none">
                        {itinerary.usd}
                      </p>
                      <p className="text-xs text-mute mt-1">{itinerary.kes}</p>
                    </div>
                    <Link
                      to={itinerary.path}
                      className="text-sm font-medium text-brand hover:text-ink transition-colors"
                    >
                      View &rarr;
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section id="trust" className="bg-ink text-sand">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-accent font-medium text-xs sm:text-sm tracking-[0.18em] uppercase mb-3">
                Why travellers trust us
              </p>
              <h2 className="font-display font-medium text-3xl sm:text-4xl leading-tight tracking-tight text-balance">
                Licensed in Kenya, guided by people who live here
              </h2>
              <p className="mt-4 text-sm sm:text-base text-sand/70 text-pretty max-w-[46ch]">
                Every driver-guide is a certified national guide; every camp we stay in is one we know by
                name. Prices are quoted honestly in both currencies, with no hidden transfer fees.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-5">
                <div>
                  <p className="font-display font-medium text-2xl sm:text-3xl text-accent leading-none">
                    {company.licence}
                  </p>
                  <p className="mt-1.5 text-xs text-sand/60">Licensed tour operator, Kenya</p>
                </div>
                <div>
                  <p className="font-display font-medium text-2xl sm:text-3xl text-accent leading-none">
                    120+
                  </p>
                  <p className="mt-1.5 text-xs text-sand/60">Certified guides &amp; drivers</p>
                </div>
                <div>
                  <p className="font-display font-medium text-2xl sm:text-3xl text-accent leading-none">
                    4.9/5
                  </p>
                  <p className="mt-1.5 text-xs text-sand/60">From 2,300+ guest reviews</p>
                </div>
              </div>
            </div>
            <blockquote className="bg-clay/10 ring-1 ring-sand/15 rounded-2xl p-6 sm:p-8">
              <p className="font-display font-medium text-xl sm:text-2xl leading-snug text-balance">
                &ldquo;Our balloon flight over the Mara at sunrise was the closest thing to magic we have ever
                seen. The team handled every detail, from visas to the last transfer.&rdquo;
              </p>
              <footer className="mt-5 flex items-center gap-3">
                <img
                  src={guestImage}
                  alt="Amara O., safari guest"
                  loading="lazy"
                  width={512}
                  height={512}
                  className="size-11 shrink-0 rounded-full object-cover"
                />
                <div className="min-w-0">
                  <p className="text-sm font-medium text-sand">Amara &amp; Jonas O.</p>
                  <p className="text-xs text-sand/50">Mara Classic, 2024</p>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      <EnquirySection />
    </main>
  );
}
