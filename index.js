const http = require("http");

const VERSION = "v2.0";

const server = http.createServer((req, res) => {
  res.end(`App Version: ${VERSION}
Deployed at: ${new Date().toISOString()}`);
});

server.listen(3000);
