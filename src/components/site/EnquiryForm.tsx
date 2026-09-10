import { useState, type FormEvent } from "react";
import { z } from "zod";
import { company, experiences } from "@/data/site";

const pickupOptions = [
  "JKIA — Nairobi international airport",
  "Wilson Airport — Nairobi",
  "Nairobi hotel or home address",
  "Moi International Airport — Mombasa",
  "Diani or south-coast hotel",
  "Kilimanjaro International Airport",
  "I will arrange my own arrival",
];

const roomOptions = [
  "Single room",
  "Double room",
  "Twin room (two beds)",
  "Family room",
  "Two rooms sharing",
  "Exclusive-use house",
];

const bookingSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z.string().trim().max(30).optional(),
  interest: z.string().trim().min(1).max(120),
  date: z.string().trim().min(1, "Please choose a travel date"),
  nights: z.coerce.number().int().min(1, "At least 1 night").max(60),
  adults: z.coerce.number().int().min(1, "At least 1 adult").max(60),
  children: z.coerce.number().int().min(0).max(30),
  pickup: z.string().trim().min(1).max(120),
  room: z.string().trim().min(1).max(120),
  notes: z.string().trim().max(1000).optional(),
});

type Booking = z.infer<typeof bookingSchema>;

const fieldClass =
  "bg-clay/50 rounded-md px-3 py-2.5 text-sm text-ink placeholder:text-mute focus:outline-none focus:ring-2 focus:ring-brand/50";

function formatDate(value: string) {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;
  return parsed.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

function reference(booking: Booking) {
  const initials = booking.name
    .split(/\s+/)
    .map((part) => part[0] ?? "")
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return `EAA-${initials || "EA"}-${booking.date.replace(/-/g, "").slice(2)}`;
}

export function EnquiryForm({ defaultInterest }: { defaultInterest?: string | undefined }) {
  const [stage, setStage] = useState<"form" | "review" | "sent">("form");
  const [booking, setBooking] = useState<Booking | null>(null);
  const [errors, setErrors] = useState<string[]>([]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    const result = bookingSchema.safeParse(data);
    if (!result.success) {
      setErrors(result.error.issues.map((issue) => issue.message));
      return;
    }
    setErrors([]);
    setBooking(result.data);
    setStage("review");
  }

  function restart() {
    setBooking(null);
    setErrors([]);
    setStage("form");
  }

  if (stage !== "form" && booking) {
    const travellers = `${booking.adults} adult${booking.adults > 1 ? "s" : ""}${
      booking.children > 0 ? `, ${booking.children} child${booking.children > 1 ? "ren" : ""}` : ""
    }`;

    const rows: [string, string][] = [
      ["Trip", booking.interest],
      ["Travel date", formatDate(booking.date)],
      ["Nights", `${booking.nights} night${booking.nights > 1 ? "s" : ""}`],
      ["Group size", travellers],
      ["Pickup", booking.pickup],
      ["Rooms", booking.room],
      ["Name", booking.name],
      ["Email", booking.email],
      ...(booking.phone ? ([["Phone / WhatsApp", booking.phone]] as [string, string][]) : []),
      ...(booking.notes ? ([["Notes", booking.notes]] as [string, string][]) : []),
    ];

    return (
      <div className="bg-sand rounded-xl p-5 sm:p-7">
        <p className="text-brand font-medium text-xs tracking-[0.18em] uppercase">
          {stage === "review" ? "Step 2 of 2 — check your request" : "Request received"}
        </p>
        <h3 className="mt-2 font-display font-medium text-2xl text-ink text-balance">
          {stage === "review"
            ? "Here is your booking request"
            : `Booking request ${reference(booking)} is with a planner`}
        </h3>
        {stage === "sent" && (
          <p className="mt-3 text-sm text-ink/70 text-pretty">
            A planner will confirm availability and a full quote within one business day. Urgent?
            WhatsApp us on {company.phoneDisplay}.
          </p>
        )}

        <dl className="mt-5 border-t border-ink/10">
          {rows.map(([label, value]) => (
            <div key={label} className="grid grid-cols-[9rem_1fr] gap-3 py-2.5 border-b border-ink/10">
              <dt className="text-xs uppercase tracking-wide text-mute pt-0.5">{label}</dt>
              <dd className="text-sm text-ink text-pretty">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 flex flex-wrap gap-3">
          {stage === "review" ? (
            <>
              <button
                type="button"
                onClick={() => setStage("sent")}
                className="bg-brand text-sand text-sm font-medium py-3 px-5 rounded-md hover:bg-ink transition-colors"
              >
                Confirm &amp; send request
              </button>
              <button
                type="button"
                onClick={() => setStage("form")}
                className="text-sm font-medium text-brand hover:text-ink transition-colors py-3"
              >
                Edit details
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={restart}
              className="text-sm font-medium text-brand hover:text-ink transition-colors"
            >
              Make another request
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-sand rounded-xl p-5 sm:p-6 grid grid-cols-2 gap-3">
      <p className="col-span-2 text-brand font-medium text-xs tracking-[0.18em] uppercase">
        Step 1 of 2 — your trip
      </p>

      {errors.length > 0 && (
        <ul className="col-span-2 bg-brand/10 rounded-md px-3 py-2.5 text-sm text-brand list-disc pl-7">
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}

      <input required name="name" type="text" placeholder="Full name" aria-label="Full name" maxLength={100} className={`col-span-2 sm:col-span-1 ${fieldClass}`} />
      <input required name="email" type="email" placeholder="Email" aria-label="Email" maxLength={255} className={`col-span-2 sm:col-span-1 ${fieldClass}`} />
      <input name="phone" type="tel" placeholder="Phone or WhatsApp" aria-label="Phone or WhatsApp" maxLength={30} className={`col-span-2 sm:col-span-1 ${fieldClass}`} />
      <select
        name="interest"
        aria-label="What are you planning"
        defaultValue={defaultInterest ?? experiences[0]?.title ?? ""}
        className={`col-span-2 sm:col-span-1 ${fieldClass}`}
      >
        {experiences.map((experience) => (
          <option key={experience.slug} value={experience.title}>
            {experience.title}
          </option>
        ))}
      </select>

      <label className="col-span-2 sm:col-span-1 grid gap-1.5">
        <span className="text-xs text-mute">Travel date</span>
        <input required name="date" type="date" aria-label="Travel date" className={fieldClass} />
      </label>
      <label className="col-span-2 sm:col-span-1 grid gap-1.5">
        <span className="text-xs text-mute">Nights</span>
        <input name="nights" type="number" min={1} max={60} defaultValue={5} aria-label="Number of nights" className={fieldClass} />
      </label>
      <label className="col-span-1 grid gap-1.5">
        <span className="text-xs text-mute">Adults</span>
        <input name="adults" type="number" min={1} max={60} defaultValue={2} aria-label="Adults" className={fieldClass} />
      </label>
      <label className="col-span-1 grid gap-1.5">
        <span className="text-xs text-mute">Children</span>
        <input name="children" type="number" min={0} max={30} defaultValue={0} aria-label="Children" className={fieldClass} />
      </label>

      <label className="col-span-2 sm:col-span-1 grid gap-1.5">
        <span className="text-xs text-mute">Preferred pickup</span>
        <select name="pickup" aria-label="Preferred pickup" className={fieldClass}>
          {pickupOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <label className="col-span-2 sm:col-span-1 grid gap-1.5">
        <span className="text-xs text-mute">Room preference</span>
        <select name="room" aria-label="Room preference" className={fieldClass}>
          {roomOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <textarea
        name="notes"
        rows={3}
        maxLength={1000}
        placeholder="Anything else — pace, dietary needs, celebrations, corporate requirements"
        aria-label="Anything else"
        className={`col-span-2 resize-none ${fieldClass}`}
      />
      <button
        type="submit"
        className="col-span-2 bg-brand text-sand text-sm font-medium py-3 rounded-md hover:bg-ink transition-colors"
      >
        Review my request
      </button>
    </form>
  );
}
