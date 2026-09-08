import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { experienceBySlug } from "@/data/site";

export const Route = createFileRoute("/culture")({
  head: () => ({
    meta: [
      { title: "Cultural Experiences in Kenya & East Africa — Acacia Trails" },
      {
        name: "description",
        content:
          "Community-arranged cultural travel: Maasai and Samburu hosts, Swahili cooking in Lamu, coffee farms and craft workshops. Fees paid to the community.",
      },
      { property: "og:title", content: "Cultural Experiences in Kenya & East Africa" },
      {
        property: "og:description",
        content: "Visits arranged with communities, not around them — in English or Kiswahili.",
      },
    ],
  }),
  component: () => <CategoryPage experience={experienceBySlug("culture")} />,
});
