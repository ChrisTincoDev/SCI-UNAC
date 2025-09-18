import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ cookies, redirect }) => {
  // Borrar todas las cookies que se usan para la sesión
  cookies.delete("username", { path: "/" });
  cookies.delete("role", { path: "/" });
  cookies.delete("name", { path: "/" });
  cookies.delete("profilePic", { path: "/" });

  // Redirigir al login
  return redirect("/", 302);
};
