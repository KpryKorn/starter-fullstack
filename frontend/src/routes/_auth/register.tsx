import RegisterForm from "@/components/auth/RegisterForm";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/register")({
  component: RouteComponent,
});

function RouteComponent() {
  return <RegisterForm />;
}
