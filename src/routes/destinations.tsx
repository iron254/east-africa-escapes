import { createFileRoute } from "@tanstack/react-router";
import { destinations, wideDestinations } from "@/data/site";
import { EnquirySection } from "@/components/site/EnquirySection";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "East Africa Destinations — Kenya, Tanzania, Uganda, Rwanda | East Africa Adventures" },
      {
        name: "description",
        content:
          "Maasai Mara, Amboseli, Diani, Serengeti, Zanzibar, Kilimanjaro, Bwindi, Naivasha, Nairobi and Kigali — where we travel and when each is at its best.",
      },
      { property: "og:title", content: "East Africa Destinations — Kenya, Tanzania, Uganda, Rwanda" },
      {
        property: "og:description",
        content: "Plains, coast, forest and city across four countries, with honest seasonal advice.",
      },
    ],
  }),
  component: DestinationsPage,
});

function DestinationsPage() {
  return (
    <main>
      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12 pt-14 md:pt-20 pb-10">
          <p className="text-brand font-medium text-xs sm:text-sm tracking-[0.18em] uppercase mb-3">
            Destinations
          </p>
          <h1 className="font-display font-medium text-4xl sm:text-5xl leading-[1.04] tracking-tight text-ink text-balance max-w-[26ch]">
            Four countries, one continuous landscape
          </h1>
          <p className="mt-4 text-sm sm:text-base text-ink/70 text-pretty max-w-[56ch]">
            We work across Kenya, Tanzania, Uganda and Rwanda. Distances look small on a map and long on the
            road, so we plan around seasons, flight schedules and border crossings rather than wishful
            driving times.
          </p>
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {destinations.map((destination) => (
              <article key={destination.name}>
                <img
                  src={destination.image}
                  alt={`${destination.name}, ${destination.country}`}
                  loading="lazy"
                  width={1080}
                  height={1080}
                  className="w-full aspect-[4/3] object-cover rounded-xl"
                />
                <div className="flex items-baseline justify-between mt-4 gap-4">
                  <h2 className="font-display font-medium text-2xl text-ink text-balance">
                    {destination.name}
                  </h2>
                  <span className="text-sm text-mute shrink-0">{destination.country}</span>
                </div>
                <p className="mt-1.5 text-sm text-ink/70 text-pretty max-w-[46ch]">{destination.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-clay/40 border-y border-ink/10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12 py-16 md:py-20">
          <h2 className="font-display font-medium text-3xl sm:text-4xl leading-tight tracking-tight text-ink text-balance mb-9">
            Further afield
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {wideDestinations.map((destination) => (
              <article
                key={destination.name}
                className="bg-sand ring-1 ring-ink/10 rounded-xl overflow-hidden"
              >
                <img
                  src={destination.image}
                  alt={`${destination.name}, ${destination.country}`}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="p-4">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display font-medium text-lg text-ink">{destination.name}</h3>
                    <span className="text-xs text-mute shrink-0">{destination.country}</span>
                  </div>
                  <p className="mt-1.5 text-sm text-ink/70 text-pretty">{destination.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <EnquirySection />
    </main>
  );
}
