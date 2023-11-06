"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// dotenv.config({ path: __dirname+'/.env' });
// require('dotenv').config({ path: __dirname+'/.env' });
// require('dotenv').config();
// const database = process.env.DATABASE_NAME;
// const password = process.env.PASSWORD;
// const username = process.env.USERNAME;
const { knexSnakeCaseMappers } = require('objection');
// Update with your config settings.
exports.config = {
    development: Object.assign({ client: "postgresql", connection: {
            database: process.env.DATABASE_NAME,
            user: process.env.USERNAME,
            password: process.env.PASSWORD,
        }, pool: {
            min: 2,
            max: 10
        }, migrations: {
            tableName: "knex_migrations"
        }, seeds: {
            directory: '../data/seeds'
        } }, knexSnakeCaseMappers)
};
module.exports = exports.config;
