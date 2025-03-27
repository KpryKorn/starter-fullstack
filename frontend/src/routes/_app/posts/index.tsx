import { useQuery } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/posts/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=9"
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
    return <div>Error!</div>;
  }

  return (
    <>
      <ul>
        {data.map((post: any) => (
          <li key={post.id} className="my-2">
            <Link
              to="/posts/$postId"
              className="block"
              params={{ postId: post.id }}
            >
              <h2 className="font-medium">{post.title}</h2>
              <p>{post.body}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
