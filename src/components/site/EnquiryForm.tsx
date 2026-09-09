import { useState, type FormEvent } from "react";
import { company, experiences } from "@/data/site";

export function EnquiryForm({ defaultInterest }: { defaultInterest?: string | undefined }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="bg-sand rounded-xl p-6 sm:p-8">
        <h3 className="font-display font-medium text-2xl text-ink">Thank you — enquiry noted</h3>
        <p className="mt-3 text-sm text-ink/70 text-pretty">
          A planner will reply within one business day. If it is urgent, message us on WhatsApp at{" "}
          {company.phoneDisplay}.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 text-sm font-medium text-brand hover:text-ink transition-colors"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-sand rounded-xl p-5 sm:p-6 grid grid-cols-2 gap-3">
      <input
        required
        type="text"
        placeholder="Full name"
        aria-label="Full name"
        className="col-span-2 sm:col-span-1 bg-clay/50 rounded-md px-3 py-2.5 text-sm text-ink placeholder:text-mute focus:outline-none focus:ring-2 focus:ring-brand/50"
      />
      <input
        required
        type="email"
        placeholder="Email"
        aria-label="Email"
        className="col-span-2 sm:col-span-1 bg-clay/50 rounded-md px-3 py-2.5 text-sm text-ink placeholder:text-mute focus:outline-none focus:ring-2 focus:ring-brand/50"
      />
      <input
        type="tel"
        placeholder="Phone or WhatsApp"
        aria-label="Phone or WhatsApp"
        className="col-span-2 sm:col-span-1 bg-clay/50 rounded-md px-3 py-2.5 text-sm text-ink placeholder:text-mute focus:outline-none focus:ring-2 focus:ring-brand/50"
      />
      <input
        type="text"
        placeholder="Travel month"
        aria-label="Travel month"
        className="col-span-2 sm:col-span-1 bg-clay/50 rounded-md px-3 py-2.5 text-sm text-ink placeholder:text-mute focus:outline-none focus:ring-2 focus:ring-brand/50"
      />
      <select
        aria-label="What are you planning"
        defaultValue={defaultInterest ?? experiences[0]?.title ?? ""}
        className="col-span-2 bg-clay/50 rounded-md px-3 py-2.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-brand/50"
      >
        {experiences.map((experience) => (
          <option key={experience.slug} value={experience.title}>
            {experience.title}
          </option>
        ))}
      </select>
      <textarea
        rows={3}
        placeholder="Tell us about your trip — travellers, pace, budget, group or corporate needs"
        aria-label="About your trip"
        className="col-span-2 bg-clay/50 rounded-md px-3 py-2.5 text-sm text-ink placeholder:text-mute resize-none focus:outline-none focus:ring-2 focus:ring-brand/50"
      />
      <button
        type="submit"
        className="col-span-2 bg-brand text-sand text-sm font-medium py-3 rounded-md hover:bg-ink transition-colors"
      >
        Send enquiry
      </button>
    </form>
  );
}
