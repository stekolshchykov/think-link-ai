module.exports = {
  apps: [
    {
      name: 'thinklink-ai',
      script: 'dist/server.js',
      instances: 'max',
      exec_mode: 'cluster',
      watch: false,
    },
  ],
};
