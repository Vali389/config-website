import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/global-presence")({
  beforeLoad: () => {
    throw redirect({ to: "/global-delivery" });
  },
  component: () => null,
});

