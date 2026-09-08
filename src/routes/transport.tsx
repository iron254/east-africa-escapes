import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { experienceBySlug } from "@/data/site";

export const Route = createFileRoute("/transport")({
  head: () => ({
    meta: [
      { title: "Safari Vehicles, Transfers & Domestic Flights — Acacia Trails" },
      {
        name: "description",
        content:
          "Pop-roof Land Cruisers, safari vans and coasters with driver-guides, airport transfers at JKIA and Moi, plus cross-border permits and domestic flights.",
      },
      { property: "og:title", content: "Safari Vehicles, Transfers & Domestic Flights" },
      {
        property: "og:description",
        content: "A maintained fleet and paperwork handled before you travel.",
      },
    ],
  }),
  component: () => <CategoryPage experience={experienceBySlug("transport")} />,
});
