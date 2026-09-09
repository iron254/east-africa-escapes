import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { experienceBySlug } from "@/data/site";

export const Route = createFileRoute("/beaches")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Beach Holidays in Diani, Watamu & Zanzibar — East Africa Adventures" },
      {
        name: "description",
        content:
          "Kenyan coast and Zanzibar beach holidays with reef days, dhow sails and resident rates. Bush-and-beach combinations from $1,640 / KES 212,000.",
      },
      { property: "og:title", content: "Beach Holidays in Diani, Watamu & Zanzibar — East Africa Adventures" },
      {
        property: "og:description",
        content: "Reef-sheltered sand, family-tested hotels and East African resident pricing.",
      },
    ],
  }),
  component: () => <CategoryPage experience={experienceBySlug("beaches")} />,
});
