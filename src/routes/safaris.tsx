import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { experienceBySlug } from "@/data/site";

export const Route = createFileRoute("/safaris")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Wildlife Safaris in Kenya & Tanzania — East Africa Adventures" },
      {
        name: "description",
        content:
          "Small-group wildlife safaris in the Maasai Mara, Amboseli, Serengeti and Ngorongoro with certified driver-guides.",
      },
      { property: "og:title", content: "Wildlife Safaris in Kenya & Tanzania — East Africa Adventures" },
      {
        property: "og:description",
        content: "Seasonal safari routing, certified guides and camps we have slept in ourselves.",
      },
    ],
  }),
  component: () => <CategoryPage experience={experienceBySlug("safaris")} />,
});
