import type { IUser } from "~/interfaces";

export default defineEventHandler(async (event) => {
  const query = "SELECT * FROM users";
  const users = await event.context.$conn.query(query);
  return users.map((user: IUser) => ({
    id: user.id,
    username: user.username,
    email: user.email,
  }));
});
