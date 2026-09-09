import { useMemo, useState, type FormEvent } from "react";
import { z } from "zod";
import { company, experiences, pickupOptions, roomOptions } from "@/data/site";

const details = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z.string().trim().max(30).optional(),
  interest: z.string().trim().min(1, "Choose what you are planning"),
  trip: z.string().trim().max(120).optional(),
});

const logistics = z.object({
  startDate: z.string().trim().min(1, "Choose a start date"),
  nights: z.string().trim().min(1, "Choose how long you are travelling"),
  adults: z.coerce.number().int().min(1, "At least one adult").max(60),
  children: z.coerce.number().int().min(0).max(40),
  pickup: z.string().trim().min(1, "Choose a pickup option"),
  pickupDetail: z.string().trim().max(160).optional(),
  room: z.string().trim().min(1, "Choose a room option"),
  notes: z.string().trim().max(1000).optional(),
});

type Values = {
  name: string;
  email: string;
  phone: string;
  interest: string;
  trip: string;
  startDate: string;
  nights: string;
  adults: string;
  children: string;
  pickup: string;
  pickupDetail: string;
  room: string;
  notes: string;
};

const field =
  "w-full bg-clay/50 rounded-md px-3 py-2.5 text-sm text-ink placeholder:text-mute focus:outline-none focus:ring-2 focus:ring-brand/50";

const nightOptions = ["1–2 nights", "3–5 nights", "6–8 nights", "9–12 nights", "Longer / not sure"];

function Label({ children }: { children: React.ReactNode }) {
  return <span className="block text-xs uppercase tracking-[0.14em] text-mute mb-1.5">{children}</span>;
}

function reference() {
  return `EAA-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
}

export function BookingForm({ defaultInterest }: { defaultInterest?: string | undefined }) {
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [ref, setRef] = useState<string | null>(null);
  const [values, setValues] = useState<Values>({
    name: "",
    email: "",
    phone: "",
    interest: defaultInterest ?? experiences[0]?.title ?? "",
    trip: "",
    startDate: "",
    nights: nightOptions[1]!,
    adults: "2",
    children: "0",
    pickup: pickupOptions[0]!,
    pickupDetail: "",
    room: roomOptions[0]!,
    notes: "",
  });

  const tripChoices = useMemo(
    () => experiences.find((item) => item.title === values.interest)?.packages ?? [],
    [values.interest],
  );

  function set<K extends keyof Values>(key: K, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function validate(schema: z.ZodTypeAny) {
    const result = schema.safeParse(values);
    if (result.success) {
      setErrors({});
      return true;
    }
    const next: Record<string, string> = {};
    for (const issue of result.error.issues) {
      const key = String(issue.path[0]);
      if (!next[key]) next[key] = issue.message;
    }
    setErrors(next);
    return false;
  }

  function handleNext(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (step === 0 && validate(details)) setStep(1);
    else if (step === 1 && validate(logistics)) setStep(2);
  }

  function handleConfirm() {
    setRef(reference());
    setStep(3);
  }

  function restart() {
    setRef(null);
    setStep(0);
    setValues((prev) => ({ ...prev, trip: "", notes: "", startDate: "" }));
  }

  const travellers = `${values.adults} adult${values.adults === "1" ? "" : "s"}${
    values.children !== "0" ? `, ${values.children} child${values.children === "1" ? "" : "ren"}` : ""
  }`;

  if (step === 3 && ref) {
    return (
      <div className="bg-sand rounded-xl p-6 sm:p-8">
        <p className="text-xs uppercase tracking-[0.16em] text-brand mb-2">Request {ref}</p>
        <h3 className="font-display font-medium text-2xl text-ink text-balance">
          Booking request received
        </h3>
        <p className="mt-3 text-sm text-ink/70 text-pretty">
          A planner will confirm availability and send a written quote within one business day. Urgent?
          WhatsApp us on {company.phoneDisplay} and quote {ref}.
        </p>
        <dl className="mt-6 border-t border-ink/10 divide-y divide-ink/10 text-sm">
          <Row label="Trip" value={values.trip ? `${values.interest} — ${values.trip}` : values.interest} />
          <Row label="Start date" value={values.startDate} />
          <Row label="Length" value={values.nights} />
          <Row label="Travellers" value={travellers} />
          <Row
            label="Pickup"
            value={values.pickupDetail ? `${values.pickup} — ${values.pickupDetail}` : values.pickup}
          />
          <Row label="Rooms" value={values.room} />
          <Row label="Contact" value={`${values.name} · ${values.email}${values.phone ? ` · ${values.phone}` : ""}`} />
          {values.notes ? <Row label="Notes" value={values.notes} /> : null}
        </dl>
        <button
          type="button"
          onClick={restart}
          className="mt-6 text-sm font-medium text-brand hover:text-ink transition-colors"
        >
          Start another request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-sand rounded-xl p-5 sm:p-6">
      <div className="flex items-center gap-2 mb-5">
        {["Your details", "Dates & options", "Review"].map((title, index) => (
          <div key={title} className="flex-1">
            <div
              className={`h-1 rounded-full ${index <= step ? "bg-brand" : "bg-clay"} transition-colors`}
            />
            <p className={`mt-2 text-xs ${index === step ? "text-ink font-medium" : "text-mute"}`}>
              {title}
            </p>
          </div>
        ))}
      </div>

      {step < 2 ? (
        <form onSubmit={handleNext} className="grid grid-cols-2 gap-3">
          {step === 0 ? (
            <>
              <Field className="col-span-2 sm:col-span-1" label="Full name" error={errors["name"]}>
                <input
                  className={field}
                  value={values.name}
                  onChange={(event) => set("name", event.target.value)}
                  placeholder="Full name"
                  aria-label="Full name"
                />
              </Field>
              <Field className="col-span-2 sm:col-span-1" label="Email" error={errors["email"]}>
                <input
                  type="email"
                  className={field}
                  value={values.email}
                  onChange={(event) => set("email", event.target.value)}
                  placeholder="you@example.com"
                  aria-label="Email"
                />
              </Field>
              <Field className="col-span-2 sm:col-span-1" label="Phone or WhatsApp" error={errors["phone"]}>
                <input
                  type="tel"
                  className={field}
                  value={values.phone}
                  onChange={(event) => set("phone", event.target.value)}
                  placeholder="+254…"
                  aria-label="Phone or WhatsApp"
                />
              </Field>
              <Field className="col-span-2 sm:col-span-1" label="What are you planning" error={errors["interest"]}>
                <select
                  className={field}
                  value={values.interest}
                  aria-label="What are you planning"
                  onChange={(event) => {
                    set("interest", event.target.value);
                    set("trip", "");
                  }}
                >
                  {experiences.map((experience) => (
                    <option key={experience.slug} value={experience.title}>
                      {experience.title}
                    </option>
                  ))}
                </select>
              </Field>
              {tripChoices.length ? (
                <Field className="col-span-2" label="Itinerary (optional)">
                  <select
                    className={field}
                    value={values.trip}
                    aria-label="Itinerary"
                    onChange={(event) => set("trip", event.target.value)}
                  >
                    <option value="">No preference — advise me</option>
                    {tripChoices.map((pack) => (
                      <option key={pack.name} value={pack.name}>
                        {pack.name} · {pack.duration}
                      </option>
                    ))}
                  </select>
                </Field>
              ) : null}
            </>
          ) : (
            <>
              <Field className="col-span-2 sm:col-span-1" label="Start date" error={errors["startDate"]}>
                <input
                  type="date"
                  className={field}
                  value={values.startDate}
                  aria-label="Start date"
                  onChange={(event) => set("startDate", event.target.value)}
                />
              </Field>
              <Field className="col-span-2 sm:col-span-1" label="How long" error={errors["nights"]}>
                <select
                  className={field}
                  value={values.nights}
                  aria-label="How long"
                  onChange={(event) => set("nights", event.target.value)}
                >
                  {nightOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </Field>
              <Field className="col-span-1" label="Adults" error={errors["adults"]}>
                <input
                  type="number"
                  min={1}
                  max={60}
                  className={field}
                  value={values.adults}
                  aria-label="Adults"
                  onChange={(event) => set("adults", event.target.value)}
                />
              </Field>
              <Field className="col-span-1" label="Children" error={errors["children"]}>
                <input
                  type="number"
                  min={0}
                  max={40}
                  className={field}
                  value={values.children}
                  aria-label="Children"
                  onChange={(event) => set("children", event.target.value)}
                />
              </Field>
              <Field className="col-span-2 sm:col-span-1" label="Preferred pickup" error={errors["pickup"]}>
                <select
                  className={field}
                  value={values.pickup}
                  aria-label="Preferred pickup"
                  onChange={(event) => set("pickup", event.target.value)}
                >
                  {pickupOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </Field>
              <Field
                className="col-span-2 sm:col-span-1"
                label="Pickup address or flight (optional)"
                error={errors["pickupDetail"]}
              >
                <input
                  className={field}
                  value={values.pickupDetail}
                  aria-label="Pickup address or flight"
                  placeholder="Hotel, address or flight number"
                  onChange={(event) => set("pickupDetail", event.target.value)}
                />
              </Field>
              <Field className="col-span-2" label="Room preference" error={errors["room"]}>
                <select
                  className={field}
                  value={values.room}
                  aria-label="Room preference"
                  onChange={(event) => set("room", event.target.value)}
                >
                  {roomOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </Field>
              <Field className="col-span-2" label="Anything else (optional)" error={errors["notes"]}>
                <textarea
                  rows={3}
                  className={`${field} resize-none`}
                  value={values.notes}
                  aria-label="Anything else"
                  placeholder="Pace, dietary needs, celebrations, corporate requirements"
                  onChange={(event) => set("notes", event.target.value)}
                />
              </Field>
            </>
          )}

          <div className="col-span-2 flex items-center gap-3 mt-1">
            {step > 0 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="text-sm font-medium text-ink/70 hover:text-brand transition-colors"
              >
                &larr; Back
              </button>
            ) : null}
            <button
              type="submit"
              className="ml-auto bg-brand text-sand text-sm font-medium py-3 px-6 rounded-md hover:bg-ink transition-colors"
            >
              {step === 0 ? "Continue" : "Review request"}
            </button>
          </div>
        </form>
      ) : (
        <div>
          <h3 className="font-display font-medium text-xl text-ink">Check your booking request</h3>
          <dl className="mt-4 border-t border-ink/10 divide-y divide-ink/10 text-sm">
            <Row label="Trip" value={values.trip ? `${values.interest} — ${values.trip}` : values.interest} />
            <Row label="Start date" value={values.startDate} />
            <Row label="Length" value={values.nights} />
            <Row label="Travellers" value={travellers} />
            <Row
              label="Pickup"
              value={values.pickupDetail ? `${values.pickup} — ${values.pickupDetail}` : values.pickup}
            />
            <Row label="Rooms" value={values.room} />
            <Row
              label="Contact"
              value={`${values.name} · ${values.email}${values.phone ? ` · ${values.phone}` : ""}`}
            />
            {values.notes ? <Row label="Notes" value={values.notes} /> : null}
          </dl>
          <div className="mt-5 flex items-center gap-3">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="text-sm font-medium text-ink/70 hover:text-brand transition-colors"
            >
              &larr; Edit details
            </button>
            <button
              type="button"
              onClick={handleConfirm}
              className="ml-auto bg-brand text-sand text-sm font-medium py-3 px-6 rounded-md hover:bg-ink transition-colors"
            >
              Send booking request
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="py-3 flex gap-4">
      <dt className="w-28 shrink-0 text-xs uppercase tracking-[0.14em] text-mute">{label}</dt>
      <dd className="text-ink text-pretty">{value}</dd>
    </div>
  );
}

function Field({
  label,
  error,
  className,
  children,
}: {
  label: string;
  error?: string | undefined;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={className}>
      <Label>{label}</Label>
      {children}
      {error ? <span className="mt-1 block text-xs text-brand">{error}</span> : null}
    </label>
  );
}
