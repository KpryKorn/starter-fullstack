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
    return <div>Loading...</div>;
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
