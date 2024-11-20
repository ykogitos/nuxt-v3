import type { IUser } from "~/interfaces";

export default defineEventHandler(async (event) => {
  const username = getRouterParam(event, "user");
  let query = "SELECT ";
  query += "id, firstname, lastname, email, username ";
  query += "FROM users ";
  query += "WHERE username='" + username + "'";
  const user = await event.context.$conn.query(query);
  return user as IUser[];
});
