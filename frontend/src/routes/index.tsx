import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <>
      <Header />
      <main className="container py-6 md:py-12 grow">
        <h1>Home</h1>
        <p>
          Welcome to the home page! This page is accessible without login access
        </p>
      </main>
      <Footer />
    </>
  );
}
