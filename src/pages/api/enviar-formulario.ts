import { db, users } from "astro:db";
import type { APIRoute } from "astro";

export const POST: APIRoute = async (ctx) => {
  const formData = new URLSearchParams(await ctx.request.text());

  const newUser = {
    nombre: formData.get("nombre") || "",
    email: formData.get("email") || "",
    telefono: formData.get("telefono") || "",
    contrasena: formData.get("contrasena") || "",
  };

  try {
    // Inserta los datos en la tabla 'users' usando la definición de tabla importada
    await db.insert(users).values(newUser);

    // Redirige al usuario a la página de inicio
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/login",
      },
    });
  } catch (error) {
    console.error("Error al guardar en la base de datos:", error);
    return new Response("Error al registrar", { status: 500 });
  }
};
