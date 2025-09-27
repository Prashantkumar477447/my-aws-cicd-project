const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const host = '0.0.0.0';  // Listen on all network interfaces

const branch = process.env.GIT_BRANCH || "local";

app.get("/", (req, res) => {
  res.send(`
    <h1>🚀 Deployed from ${branch} branch</h1>
    <p>This app is running on AWS EC2 via GitHub Actions CI/CD.</p>
  `);
});

app.listen(port, host, () => {
  console.log(`App listening on http://${host}:${port}`);
});

