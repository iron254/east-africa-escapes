import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { experienceBySlug } from "@/data/site";

export const Route = createFileRoute("/adventure")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Kilimanjaro, Mount Kenya & Adventure Trips — East Africa Adventures" },
      {
        name: "description",
        content:
          "Guided Kilimanjaro and Mount Kenya climbs with real acclimatisation days, fair-wage crews and safety kit, plus Nile whitewater in Uganda.",
      },
      { property: "og:title", content: "Kilimanjaro, Mount Kenya & Adventure Trips" },
      {
        property: "og:description",
        content: "Five climate zones, patient pacing and crews paid to KPAP guidelines.",
      },
    ],
  }),
  component: () => <CategoryPage experience={experienceBySlug("adventure")} />,
});
