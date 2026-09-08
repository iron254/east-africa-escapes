import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { experienceBySlug } from "@/data/site";

export const Route = createFileRoute("/groups")({
  head: () => ({
    meta: [
      { title: "Group, Corporate & Incentive Travel in East Africa — Acacia Trails" },
      {
        name: "description",
        content:
          "Team retreats, incentive safaris, conferences and family reunions with one named planner, on-ground coordinators and KES or USD invoicing.",
      },
      { property: "og:title", content: "Group, Corporate & Incentive Travel in East Africa" },
      {
        property: "og:description",
        content: "One planner, finance-ready paperwork and coordinators who travel with you.",
      },
    ],
  }),
  component: () => <CategoryPage experience={experienceBySlug("groups")} />,
});
