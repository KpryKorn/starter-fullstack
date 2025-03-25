import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import Footer from "@/components/layout/Footer";

export const Route = createFileRoute("/_app")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <header className="py-6 bg-red-200">
        <div className="container flex items-center gap-4">
          <h1>Layout Application</h1>
          <Link to="/">Home</Link>
        </div>
      </header>
      <main className="container py-6 md:py-12 grow">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
