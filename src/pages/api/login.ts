import { db, users } from "astro:db";
import type { APIRoute } from "astro";

export const POST: APIRoute = async (ctx) => {
  const formData = new URLSearchParams(await ctx.request.text());

  const email = formData.get("email") || "";
  const contrasena = formData.get("contrasena") || "";

  try {
    // Busca el usuario por el correo electrónico
    const user = await db.select(users).where({ email }).single();

    // Verifica si la contraseña coincide
    if (user && user.contrasena === contrasena) {
      // Redirige al usuario a la página de inicio si el inicio de sesión es exitoso
      return new Response(null, {
        status: 302,
        headers: {
          Location: "/",
        },
      });
    } else {
      // Redirige al usuario a una página de error si las credenciales son incorrectas
      return new Response("Credenciales inválidas", { status: 401 });
    }
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    return new Response("Error al iniciar sesión", { status: 500 });
  }
};
