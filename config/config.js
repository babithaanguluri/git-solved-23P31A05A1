// config/config.js
const Config = {
  appName: "DevOps Simulator",
  version: "2.0.0-beta",
  environment: process.env.NODE_ENV || "development",
  debugMode: process.env.NODE_ENV === "development",
  server: {
    host: "0.0.0.0",
    port: 8080
  }
};

module.exports = Config;
