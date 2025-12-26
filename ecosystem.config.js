module.exports = {
  apps: [{
    name: "indievolve-server",
    script: "./server.js",
    watch: true,
    ignore_watch: ["node_modules", "logs"],
    env: {
      NODE_ENV: "development",
      PORT: 9100
    },
    env_production: {
      NODE_ENV: "production",
      PORT: 9100
    }
  }]
}
