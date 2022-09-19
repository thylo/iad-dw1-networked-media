const os = require("os");

const interfaces = os.networkInterfaces();

const items = Object.keys(interfaces)
  .map((key) => interfaces[key].filter((io) => io.family === "IPv4"))
  .reduce(
    (previousValue, currentValue) => [...previousValue, ...currentValue],
    []
  );

module.exports = items;
