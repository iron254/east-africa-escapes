import { createFileRoute } from "@tanstack/react-router";
import { company } from "@/data/site";
import { EnquiryForm } from "@/components/site/EnquiryForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Enquire & Book — East Africa Adventures Kenya & East Africa" },
      {
        name: "description",
        content:
          "Send a trip enquiry or message us on WhatsApp. A planner in Nairobi replies within one business day, in English or Kiswahili.",
      },
      { property: "og:title", content: "Enquire & Book — East Africa Adventures" },
      {
        property: "og:description",
        content: "Tell us the dates and the mood; we come back with a costed itinerary in USD and KES.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="bg-brand">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <p className="text-clay font-medium text-xs sm:text-sm tracking-[0.18em] uppercase mb-3">
              Plan your trip
            </p>
            <h1 className="font-display font-medium text-4xl sm:text-5xl leading-[1.04] tracking-tight text-sand text-balance max-w-[22ch]">
              Tell us where you want to go
            </h1>
            <p className="mt-4 text-sm sm:text-base text-clay/80 text-pretty max-w-[46ch]">
              Share your dates, group size and the kind of days you want. A dedicated planner replies within
              one business day with a costed itinerary in USD and KES — no obligation, no pressure.
            </p>

            <dl className="mt-10 grid gap-5 text-sand">
              <div className="border-t border-sand/20 pt-4">
                <dt className="text-xs uppercase tracking-[0.16em] text-clay/80">WhatsApp &amp; phone</dt>
                <dd className="mt-1 font-display font-medium text-xl">
                  <a href={company.whatsappHref} className="hover:text-accent transition-colors">
                    {company.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div className="border-t border-sand/20 pt-4">
                <dt className="text-xs uppercase tracking-[0.16em] text-clay/80">Email</dt>
                <dd className="mt-1 font-display font-medium text-xl">
                  <a href={`mailto:${company.email}`} className="hover:text-accent transition-colors">
                    {company.email}
                  </a>
                </dd>
              </div>
              <div className="border-t border-sand/20 pt-4">
                <dt className="text-xs uppercase tracking-[0.16em] text-clay/80">Offices</dt>
                <dd className="mt-1 text-sm text-clay/90">
                  {company.bases} · Licence {company.licence}
                </dd>
              </div>
              <div className="border-t border-sand/20 pt-4">
                <dt className="text-xs uppercase tracking-[0.16em] text-clay/80">Planning hours</dt>
                <dd className="mt-1 text-sm text-clay/90">
                  Mon–Sat, 8am–6pm EAT. Duty planner on WhatsApp while you travel.
                </dd>
              </div>
            </dl>
          </div>

          <EnquiryForm />
        </div>
      </div>
    </main>
  );
}
