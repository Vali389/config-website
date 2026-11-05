import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/sap")({
  beforeLoad: () => {
    throw redirect({
      to: "/services/enterprise-applications",
      hash: "sap",
      replace: true,
    });
  },
  component: () => null,
});
