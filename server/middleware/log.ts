const config = useRuntimeConfig();

export default defineEventHandler((event) => {
  console.log("MIDDLEWARE => config:", config);
  console.log("MIDDLEWARE => New request: " + getRequestURL(event));
  // console.log("=> event", event);
});
