import { randomUUID, randomBytes, sign } from "crypto";

const config = useRuntimeConfig();

export default defineEventHandler((event) => {
  // const headers = {
  //   "Access-Control-Allow-Origin": "Same-Origin",
  //   crossOriginResourcePolicy: "same-origin",
  //   crossOriginOpenerPolicy: "same-origin",
  //   crossOriginEmbedderPolicy: "require-corp",
  //   "content-Security-Policy":
  //     "default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
  //   "X-XSS-Protection": 1,
  // };
  // setHeaders(event, headers);
  // const iterator = event.headers.entries();
  // let header = iterator.next();
  // while (!header.done) {
  //   console.log("HEADER", header.value);
  //   header = iterator.next();
  // }

  // const s = sign()

  setResponseHeader(event, "X-RESPONS", "KGT");

  setCookie(event, "XSRF-TOKEN", randomUUID(), {
    sameSite: true,
    httpOnly: true,
    secure: true,
  });

  setHeader(event, "X-VALIDATION-TOKEN", randomBytes(16).toString("base64"));
  console.log(
    new Date().toLocaleString("fr") +
      " MIDDLEWARE => New request: " +
      getRequestIP(event, { xForwardedFor: true }) +
      " " +
      getRequestURL(event)
  );
});
