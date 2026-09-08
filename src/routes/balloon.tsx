import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { experienceBySlug } from "@/data/site";

export const Route = createFileRoute("/balloon")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Hot-Air Balloon Flights over the Mara & Serengeti — East Africa Adventures" },
      {
        name: "description",
        content:
          "Dawn hot-air balloon flights over the Maasai Mara, Serengeti and Lake Naivasha with licensed operators and a bush breakfast on landing.",
      },
      { property: "og:title", content: "Hot-Air Balloon Flights over the Mara & Serengeti" },
      {
        property: "og:description",
        content: "One hour above the plains at first light, then champagne breakfast on the grass.",
      },
    ],
  }),
  component: () => <CategoryPage experience={experienceBySlug("balloon")} />,
});
