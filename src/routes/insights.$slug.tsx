import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/insights/$slug")({
  beforeLoad: ({ params }) => {
    throw redirect({
      to: "/resources/$slug",
      params: { slug: params.slug },
      replace: true,
    });
  },
  component: () => null,
});

