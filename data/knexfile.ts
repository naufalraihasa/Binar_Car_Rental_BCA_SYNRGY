import type { Knex } from "knex";
import dotenv from 'dotenv';

dotenv.config();
// dotenv.config({ path: __dirname+'/.env' });
// require('dotenv').config({ path: __dirname+'/.env' });
// require('dotenv').config();

// const database = process.env.DATABASE_NAME;
// const password = process.env.PASSWORD;
// const username = process.env.USERNAME;

const { knexSnakeCaseMappers } = require('objection');

// Update with your config settings.

export const config: { [key: string]: Knex.Config } = {
  development: {
    client: "postgresql",
    connection: {
      database: "test_db",
      user: "postgres",
      password: "Kusuma3107",
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    },
    seeds: { 
      directory: '../data/seeds' 
    },
    ...knexSnakeCaseMappers,
  }
};

module.exports = config;
