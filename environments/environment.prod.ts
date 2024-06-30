export default () => ({
  production: false,

  server: {
    host: '0.0.0.0',
    domainUrl: 'http://localhost:3000',
    port: 3000,
  },

  database: {
    type: 'postgres',
    host: 'database-testing.ctsaa8mwmacr.us-east-2.rds.amazonaws.com',
    port: 5432,
    database: 'postgres',
    username: 'postgres',
    password: 'nhoxthai1996',
    keepConnectionAlive: true,
    logging: false,
    synchronize: true,
  },
});
