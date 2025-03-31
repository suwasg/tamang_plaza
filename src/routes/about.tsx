import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")<{
  component: typeof AboutComponent;
}>({
  component: AboutComponent,
});

function AboutComponent() {
  return (
    <div className="p-2 text-primary">
      <h3>Welcome to the about page</h3>
    </div>
  );
}