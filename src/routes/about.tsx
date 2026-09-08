import { createFileRoute } from "@tanstack/react-router";
import guestImage from "@/assets/guest.jpg";
import { company } from "@/data/site";
import { EnquirySection } from "@/components/site/EnquirySection";

const promises = [
  {
    title: "Licensed and insured",
    body: `Licence ${company.licence}, held with the Kenya Tourism Regulatory Authority, with passenger liability cover on every vehicle.`,
  },
  {
    title: "Guides, not scripts",
    body: "Our driver-guides are certified national guides who grew up in the regions they drive, and they are paid a salary rather than tips.",
  },
  {
    title: "One quote, all in",
    body: "Park fees, conservancy levies, transfers and taxes are itemised in your quote. If something is excluded, it says so in bold.",
  },
  {
    title: "Local and international",
    body: "Kenyan and East African residents get citizen rates automatically; international guests get visa, vaccination and insurance guidance.",
  },
  {
    title: "Payment that suits you",
    body: "Pay by M-Pesa, bank transfer or card, in KES or USD, with a written schedule and a clear cancellation policy.",
  },
  {
    title: "Someone awake when you travel",
    body: "A duty planner is reachable on WhatsApp for the whole of your trip, not only office hours.",
  },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Why Travel With Us — Licensed Kenyan Tour Operator | Acacia Trails" },
      {
        name: "description",
        content:
          "A licensed Kenyan tour operator based in Nairobi and Arusha: certified guides, itemised quotes, resident rates and a duty planner reachable throughout your trip.",
      },
      { property: "og:title", content: "Why Travel With Us — Licensed Kenyan Tour Operator" },
      {
        property: "og:description",
        content: "How we plan, price and guide travel across Kenya and East Africa.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main>
      <section className="bg-ink text-sand">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12 py-16 md:py-20">
          <p className="text-accent font-medium text-xs sm:text-sm tracking-[0.18em] uppercase mb-3">
            Why travellers trust us
          </p>
          <h1 className="font-display font-medium text-4xl sm:text-5xl leading-[1.04] tracking-tight text-balance max-w-[28ch]">
            Licensed in Kenya, guided by people who live here
          </h1>
          <p className="mt-4 text-sm sm:text-base text-sand/70 text-pretty max-w-[54ch]">
            {company.name} has planned travel from {company.bases} since 2009 — for Nairobi families taking a
            weekend in the bush, and for visitors crossing the world for one migration morning. Same
            standards, same honest pricing.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-5 max-w-2xl">
            <div>
              <p className="font-display font-medium text-2xl sm:text-3xl text-accent leading-none">
                {company.licence}
              </p>
              <p className="mt-1.5 text-xs text-sand/60">Licensed tour operator, Kenya</p>
            </div>
            <div>
              <p className="font-display font-medium text-2xl sm:text-3xl text-accent leading-none">120+</p>
              <p className="mt-1.5 text-xs text-sand/60">Certified guides &amp; drivers</p>
            </div>
            <div>
              <p className="font-display font-medium text-2xl sm:text-3xl text-accent leading-none">4.9/5</p>
              <p className="mt-1.5 text-xs text-sand/60">From 2,300+ guest reviews</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12 py-16 md:py-20">
          <h2 className="font-display font-medium text-3xl sm:text-4xl leading-tight tracking-tight text-ink text-balance mb-10">
            Six promises we hold to
          </h2>
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
            {promises.map((promise) => (
              <div key={promise.title} className="border-t border-ink/10 pt-4">
                <dt className="font-display font-medium text-lg text-ink">{promise.title}</dt>
                <dd className="mt-1.5 text-sm text-ink/70 text-pretty">{promise.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-clay/40 border-y border-ink/10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12 py-16 md:py-20">
          <blockquote className="max-w-3xl">
            <p className="font-display font-medium text-2xl sm:text-3xl leading-snug text-ink text-balance">
              &ldquo;Our balloon flight over the Mara at sunrise was the closest thing to magic we have ever
              seen. The team handled every detail, from visas to the last transfer.&rdquo;
            </p>
            <footer className="mt-6 flex items-center gap-3">
              <img
                src={guestImage}
                alt="Amara O., safari guest"
                loading="lazy"
                width={512}
                height={512}
                className="size-12 shrink-0 rounded-full object-cover"
              />
              <div className="min-w-0">
                <p className="text-sm font-medium text-ink">Amara &amp; Jonas O.</p>
                <p className="text-xs text-mute">Mara Classic, 2024</p>
              </div>
            </footer>
          </blockquote>
        </div>
      </section>

      <EnquirySection />
    </main>
  );
}
