import mariadb from "mariadb";

export default defineNitroPlugin(async (nitroApp) => {
  const config = useRuntimeConfig();

  try {
    const pool = mariadb.createPool({
      host: config.dbUrl,
      database: config.dbName,
      user: config.dbUser,
      password: config.dbPwd,
      connectionLimit: 5,
    });
    const conn = await pool.getConnection();
    nitroApp.hooks.hook("request", (event) => {
      event.context.$conn = conn;
    });
    console.log(
      "\x1b[1;32m",
      "=> PLUGINS MARIADB",
      "\x1b[42m\x1b[33m",
      "CONNECTED",
      "\x1b[0;0m",
      ""
    );
  } catch (e) {
    throw "PLUGIN MARIADB ERROR";
  }
});

// 45d4214d-a285-11ef-9345-00224d7a53e4
