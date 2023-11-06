import type { Knex } from "knex";
import dotenv from 'dotenv';

const { knexSnakeCaseMappers } = require('objection');
dotenv.config();

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "postgresql",
    connection: {
      database: process.env.DATABASE_NAME,
      user: process.env.USERNAME,
      password: process.env.PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    },
    seeds: { 
      directory: './seeds' 
    },
    ...knexSnakeCaseMappers,
  },

};

module.exports = config;
