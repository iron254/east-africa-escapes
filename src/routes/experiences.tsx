import { createFileRoute, Link } from "@tanstack/react-router";
import { experiences } from "@/data/site";
import { EnquirySection } from "@/components/site/EnquirySection";

export const Route = createFileRoute("/experiences")({
  head: () => ({
    meta: [
      { title: "Experiences — Safaris, Beaches, Balloons & More | Acacia Trails" },
      {
        name: "description",
        content:
          "Nine ways to travel East Africa: wildlife safaris, beach holidays, balloon flights, cultural days, mountain trips, city tours, transport, stays and group travel.",
      },
      { property: "og:title", content: "Experiences across Kenya and East Africa" },
      {
        property: "og:description",
        content: "Choose the shape of your trip, then let a planner build the days around it.",
      },
    ],
  }),
  component: ExperiencesPage,
});

function ExperiencesPage() {
  return (
    <main>
      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12 pt-14 md:pt-20 pb-10">
          <p className="text-brand font-medium text-xs sm:text-sm tracking-[0.18em] uppercase mb-3">
            Experiences
          </p>
          <h1 className="font-display font-medium text-4xl sm:text-5xl leading-[1.04] tracking-tight text-ink text-balance max-w-[24ch]">
            Nine ways into East Africa
          </h1>
          <p className="mt-4 text-sm sm:text-base text-ink/70 text-pretty max-w-[56ch]">
            Every trip we run is assembled from these building blocks. Pick one, or tell us the mood and we
            will combine them — plains, coast, altitude and city in a single route if that is what you want.
          </p>
        </div>
      </section>

      <section className="bg-clay/40 border-y border-ink/10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12 py-14 md:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {experiences.map((experience) => (
              <Link
                key={experience.slug}
                to={experience.path}
                className="group bg-sand ring-1 ring-ink/10 rounded-xl overflow-hidden flex flex-col"
              >
                <img
                  src={experience.image}
                  alt={experience.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full aspect-[16/10] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="font-display font-medium text-xl text-ink text-balance">
                      {experience.title}
                    </h2>
                    <span className="text-xs text-mute shrink-0">{experience.duration}</span>
                  </div>
                  <p className="mt-2 text-sm text-ink/70 text-pretty flex-1">{experience.lead}</p>
                  <span className="mt-4 text-sm font-medium text-brand group-hover:text-ink transition-colors">
                    Explore &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <EnquirySection />
    </main>
  );
}
