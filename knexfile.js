// Update with your config settings.

require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: process.env.DB_NAME,
      user:     "postgres",
      password: "123",
      host:     process.env.HOST
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory:'migrations'
    }
  },
  production: {
    client: 'pg',
    // connection: {
    //   database: process.env.database,
    //   user:     process.env.user,
    //   password: process.env.password
    // }
    connection: process.env.DATABASE_URL+"?ssl=true",
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName:"knex_migrations",
      directory: './migrations'
    }
  }

};