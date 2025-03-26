import { Link } from "@tanstack/react-router";

export default function Header() {
  const ROUTES = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Login",
      path: "/login",
    },
    {
      name: "Register",
      path: "/register",
    },
    {
      name: "Posts",
      path: "/posts",
    },
    {
      name: "Users",
      path: "/users",
    },
  ];

  return (
    <header className="bg-slate-200">
      <nav className="container py-6">
        <ul className="flex gap-4 items-center">
          {ROUTES.map((route, idx) => (
            <li key={idx}>
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
