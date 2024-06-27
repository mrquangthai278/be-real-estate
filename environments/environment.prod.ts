export default () => ({
  production: true,

  server: {
    host: process.env.HOST,
    domainUrl: process.env.DOMAIN_URL,
    port: Number(process.env.PORT),
  },

  database: {
    type: process.env.TYPEORM_TYPE,
    host: process.env.TYPEORM_HOST,
    port: Number(process.env.TYPEORM_PORT),
    database: process.env.TYPEORM_DATABASE,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    keepConnectionAlive: true,
    logging: false,
    synchronize: true,
  },
});
