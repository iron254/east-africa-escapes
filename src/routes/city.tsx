import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { experienceBySlug } from "@/data/site";

export const Route = createFileRoute("/city")({
  head: () => ({
    meta: [
      { title: "Nairobi, Mombasa & Kampala City Excursions — Acacia Trails" },
      {
        name: "description",
        content:
          "Half-day and full-day city tours in Nairobi, Mombasa, Kampala, Kigali and Dar es Salaam — ideal for layovers and corporate free afternoons.",
      },
      { property: "og:title", content: "Nairobi, Mombasa & Kampala City Excursions" },
      {
        property: "og:description",
        content: "Food-led city routes with a driver who knows the traffic windows.",
      },
    ],
  }),
  component: () => <CategoryPage experience={experienceBySlug("city")} />,
});
