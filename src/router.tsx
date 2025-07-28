import { createRouter as createTanStackRouter } from "@tanstack/react-router";

import { NotFound } from "./components/not-found";
import { routeTree } from "./routeTree.gen";

export function createRouter() {
  const router = createTanStackRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreload: "intent",
    defaultStaleTime: 5000,
    defaultPendingComponent: () => <div>Loading...</div>,
    defaultNotFoundComponent: () => <NotFound />,
  });

  return router;
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}
