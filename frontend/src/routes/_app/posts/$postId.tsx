import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/posts/$postId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { postId } = Route.useParams();
  const { data, isError, isLoading } = useQuery({
    queryKey: ["posts", postId],
    queryFn: async () => {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts/" + postId
      );

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      return await res.json();
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div>
      <p className="mb-2">Post ID: {postId}</p>
      <h1 className="text-2xl font-medium">{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
}
