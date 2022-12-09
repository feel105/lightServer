const { Telnet } = require("telnet-client");

(async function () {
  const connection = new Telnet();

  // these parameters are just examples and most probably won't work for your use-case.
  const params = {
    host: "127.0.0.1",
    port: 9000,
  };

  try {
    await connection.connect(params);
  } catch (error) {
    console.log("err", error);
  }

  const res = await connection.exec("uptime");
  console.log("async result:", res);
})();
