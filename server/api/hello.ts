import type { IUsers } from "~/interfaces";

export default defineEventHandler(async (event) => {
  console.log("SERVER REQUEST");
  const res = await event.context.$conn.query("SELECT * FROM users");

  const users = res.map((user: IUsers) => {
    return {
      id: user.id,
      username: user.username,
      email: user.email,
    };
  });
  return users;
});
