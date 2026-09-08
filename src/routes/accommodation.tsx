import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { experienceBySlug } from "@/data/site";

export const Route = createFileRoute("/accommodation")({
  head: () => ({
    meta: [
      { title: "Safari Camps, Lodges & Beach Hotels — Acacia Trails" },
      {
        name: "description",
        content:
          "Comfort, premium and exclusive-use accommodation across Kenya and East Africa, with honest descriptions and East African resident rates.",
      },
      { property: "og:title", content: "Safari Camps, Lodges & Beach Hotels" },
      {
        property: "og:description",
        content: "Three clear tiers, resident pricing and no surprises on arrival.",
      },
    ],
  }),
  component: () => <CategoryPage experience={experienceBySlug("accommodation")} />,
});
