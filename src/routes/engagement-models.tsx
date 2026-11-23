import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/engagement-models")({
  beforeLoad: () => {
    throw redirect({ to: "/workforce-solutions" });
  },
  component: () => null,
});
