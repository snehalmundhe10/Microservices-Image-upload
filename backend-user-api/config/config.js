const config = {
  "development": {
    "username": process.env.POSTGRES_USERNAME,
    "password": process.env.POSTGRES_PASSWORD,
    "database": process.env.POSTGRES_DATABASE,
    "host": process.env.POSTGRES_HOST,
    "jwt": process.env.TOKEN,
    "dialect": "postgres"
  }
}
module.exports = config;