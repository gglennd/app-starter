import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_page/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="pt-24">
      <h1 className="text-4xl">
        Homepage
      </h1>
    </div>
  );
}
