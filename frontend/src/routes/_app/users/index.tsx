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
    return <p>Loading...</p>;
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
