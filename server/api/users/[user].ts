import type { IUser } from "~/interfaces";

export default defineEventHandler(async (event) => {
  const username = getRouterParam(event, "user");
  const query = "SELECT * FROM users WHERE username='" + username + "'";
  const user = await event.context.$conn.query(query);
  return user as IUser[];
});
