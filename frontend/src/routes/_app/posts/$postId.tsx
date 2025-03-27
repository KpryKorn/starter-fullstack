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
