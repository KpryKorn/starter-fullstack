import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useAuth } from "@/hooks/useAuth";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const { user, isPending, isAuthenticated, signOut } = useAuth();

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated || !user) {
    return <div>Veuillez vous connecter</div>;
  }

  return (
    <>
      <Header />
      <main className="container py-6 md:py-12 grow">
        <h1>Home</h1>
        <p>Bienvenue, {user.name}</p>
        <p>
          Welcome to the home page! This page is accessible without login access
        </p>
      </main>
      <Footer />
    </>
  );
}
