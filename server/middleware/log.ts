const config = useRuntimeConfig();

export default defineEventHandler((event) => {
  console.log(
    new Date().toLocaleString("fr") +
      " MIDDLEWARE => New request: " +
      getRequestIP(event, { xForwardedFor: true }) +
      " " +
      getRequestURL(event)
  );
});
