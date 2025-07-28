import { createFileRoute, Outlet } from "@tanstack/react-router";

import NavigationHeader from "@/components/header";

export const Route = createFileRoute("/_page")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <NavigationHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
}
