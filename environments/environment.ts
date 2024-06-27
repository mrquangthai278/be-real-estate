export default () => ({
  production: false,

  server: {
    host: '0.0.0.0',
    domainUrl: 'http://localhost:3000',
    port: 3000,
  },

  database: {
    type: 'postgres',
    host: 'ep-super-meadow-a1xpgt2g-pooler.ap-southeast-1.aws.neon.tech',
    port: 5432,
    database: 'verceldb',
    username: 'default',
    password: 'MPshJfk7DIX6',
    keepConnectionAlive: true,
    logging: false,
    synchronize: true,
  },
});
