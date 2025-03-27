import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/users/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/api/v1/users", {
        credentials: "include",
      });

      return await res.json();
    },
  });

  if (isLoading) {
    return (
      <main className="container mx-auto py-12 min-h-[50vh] flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full border-4 border-gray-300 border-t-blue-500 animate-spin"></div>
          <p className="text-lg font-medium text-gray-700">Loading...</p>
        </div>
      </main>
    );
  }

  if (isError) {
    return <p>Error</p>;
  }

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>
          <p>
            {user.name} - {user.email} - créé le{" "}
            {new Date(user.createdAt).toLocaleString("fr-FR")}
          </p>
        </li>
      ))}
    </ul>
  );
}
