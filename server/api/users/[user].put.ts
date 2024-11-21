export default defineEventHandler(async (event) => {
  const username = getRouterParam(event, "user");
  return `PUT METHOD for ${username}`;
});
