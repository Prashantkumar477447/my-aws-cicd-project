module.exports = {
  apps: [
    {
      name: "my-aws-cicd-app",
      script: "src/index.js",
      env: {
        PORT: 3000,
        GIT_BRANCH: "local"
      }
    }
  ]
};
