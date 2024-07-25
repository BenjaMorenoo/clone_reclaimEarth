import { column, defineDb, defineTable } from "astro:db";

export const users = defineTable({
  columns: {
    id: column.number({ primaryKey: true, autoIncrement: true }),
    nombre: column.text(),
    email: column.text(),
    telefono: column.text(),
    contrasena: column.text(),
  },
});

export default defineDb({
  tables: {
    users,
  },
});
