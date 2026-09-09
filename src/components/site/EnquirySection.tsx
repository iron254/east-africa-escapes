import { company } from "@/data/site";
import { BookingForm } from "./BookingForm";

export function EnquirySection({ defaultInterest }: { defaultInterest?: string | undefined }) {
  return (
    <section id="enquire" className="bg-brand">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <p className="text-clay font-medium text-xs sm:text-sm tracking-[0.18em] uppercase mb-3">
              Request a booking
            </p>
            <h2 className="font-display font-medium text-3xl sm:text-4xl leading-tight tracking-tight text-sand text-balance">
              Tell us your dates and we build the rest
            </h2>
            <p className="mt-4 text-sm sm:text-base text-clay/80 text-pretty max-w-[44ch]">
              Three quick steps — your details, your dates and options, then a summary to check before you
              send. A dedicated planner replies within one business day, in English or Kiswahili.
            </p>
            <a
              href={company.whatsappHref}
              className="mt-7 inline-flex items-center gap-2.5 bg-ink text-sand text-sm font-medium py-2.5 px-3 rounded-lg hover:bg-ink/80 transition-colors"
            >
              <span className="size-5 grid place-items-center rounded-full bg-accent text-ink font-display font-semibold text-xs leading-none shrink-0">
                W
              </span>
              WhatsApp {company.phoneDisplay}
            </a>
          </div>
          <BookingForm defaultInterest={defaultInterest} />
        </div>
      </div>
    </section>
  );
}
