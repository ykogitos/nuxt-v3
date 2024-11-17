const config = useRuntimeConfig();

export default defineEventHandler((event) => {
  console.log("MIDDLEWARE => New request: " + getRequestURL(event));
});
