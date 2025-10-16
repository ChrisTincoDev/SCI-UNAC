import type { APIRoute } from "astro";
import users from "../data/users.json";

export const POST: APIRoute = async ({ request, redirect, cookies }) => {
  const data = await request.formData();
  const username = data.get("username")?.toString() || "";
  const password = data.get("password")?.toString() || "";

  const user = (users as { username: string; password: string; role: string; name: string ; profilePic: string }[])
    .find((u) => u.username === username && u.password === password);

  if (user) {

    cookies.set("username", user.username, {
      path: "/",
      maxAge: 60 * 60,
      httpOnly: false, 
    });
    cookies.set("role", user.role, {
      path: "/",
      maxAge: 60 * 60,
      httpOnly: false,
    });
    cookies.set("name", user.name, {
      path: "/",
      maxAge: 60 * 60,
      httpOnly: false,
    });
    cookies.set("profilePic", user.profilePic, {
      path: "/",
      maxAge: 60 * 60,
      httpOnly: false,
    });

    return redirect("/home", 302);
  }

  return redirect("/?error=1", 302);
};
