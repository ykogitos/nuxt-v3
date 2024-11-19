export default defineEventHandler(async (event) => {
  const username: string | undefined = getRouterParam(event, "user");
  const onlyLettersPattern = /^[A-Za-z_]+$/;
  if (username && !username.match(onlyLettersPattern)) {
    throw "Param doesn't match pattern.";
  }
  let query = "SELECT ";
  query += "u.username username, ";
  query += "p.title title, ";
  query += "p.content content, ";
  query += "p.created_at date ";
  query += "FROM users u ";
  query += "RIGHT JOIN posts p ON p.user_id = u.uuid ";
  query += "WHERE u.username = ? ";
  query += "ORDER BY p.created_at DESC;";
  const posts = await event.context.$conn.query(query, [username]);
  return posts;
});
