const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Get branch name from environment variable (set in GitHub Actions)
const branch = process.env.GIT_BRANCH || "local";

app.get("/", (req, res) => {
  res.send(`
    <h1>🚀 Deployed from ${branch} branch</h1>
    <p>This app is running on AWS EC2 via GitHub Actions CI/CD.</p>
  `);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
