"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: '../.env' });
const { knexSnakeCaseMappers } = require('objection');
// Update with your config settings.
exports.config = {
    development: Object.assign({ client: "postgresql", connection: {
            database: process.env.DATABASE_NAME,
            user: process.env.DATABASE_USERNAME,
            password: process.env.DATABASE_PASSWORD,
        }, pool: {
            min: 2,
            max: 10
        }, migrations: {
            tableName: "knex_migrations"
        }, seeds: {
            directory: '../docs/seeds'
        } }, knexSnakeCaseMappers)
};
module.exports = exports.config;
