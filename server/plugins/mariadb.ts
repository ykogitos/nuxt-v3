import mariadb from "mariadb";

export default defineNitroPlugin(async (nitroApp) => {
  const config = useRuntimeConfig();
  const pool = mariadb.createPool({
    host: config.dbUrl,
    database: config.dbName,
    user: config.dbUser,
    password: config.dbPwd,
    connectionLimit: 5,
    idleTimeout: 0,
  });

  try {
    const conn = await pool.getConnection();
    console.log(
      new Date().toLocaleString("fr"),
      "\x1b[1;32m",
      "api/plugins MARIADB",
      "\x1b[42m\x1b[33m",
      "CONNECTED",
      "\x1b[0;0m",
      "",
      "threadID = " + conn.threadId
    );

    nitroApp.hooks.hook("request", (event) => {
      event.context.$conn = conn;
    });
  } catch (e) {
    throw "PLUGIN MARIADB ERROR";
  }
});

// 45d4214d-a285-11ef-9345-00224d7a53e4
