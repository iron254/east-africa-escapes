import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { experienceBySlug } from "@/data/site";

export const Route = createFileRoute("/safaris")({
  head: () => ({
    meta: [
      { title: "Wildlife Safaris in Kenya & Tanzania — Acacia Trails" },
      {
        name: "description",
        content:
          "Small-group wildlife safaris in the Maasai Mara, Amboseli, Serengeti and Ngorongoro with certified driver-guides. From $720 / KES 93,000.",
      },
      { property: "og:title", content: "Wildlife Safaris in Kenya & Tanzania — Acacia Trails" },
      {
        property: "og:description",
        content: "Seasonal safari routing, certified guides and camps we have slept in ourselves.",
      },
    ],
  }),
  component: () => <CategoryPage experience={experienceBySlug("safaris")} />,
});
