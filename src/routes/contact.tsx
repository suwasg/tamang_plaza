import { createFileRoute } from "@tanstack/react-router";
import MainLayout from "../ui/templates/MainLayout";
import ContactUs from "../sections/contact/ContactUs";

export const Route = createFileRoute("/contact")<{
  component: typeof AboutComponent;
}>({
  component: AboutComponent,
});

function AboutComponent() {
  return (
    <>
        <MainLayout>
            <ContactUs/>
        </MainLayout>
    </>
  );
}