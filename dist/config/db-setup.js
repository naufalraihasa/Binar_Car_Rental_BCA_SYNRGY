"use strict";
// import knex from "knex";
// import express, { Express, Request, Response } from 'express';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
// // const knex = require('knex');
// // const { Model } = require('objection');
// // const knexfile = require('./knexfile');
// // Setup knex and objection
// // globally install database inside all models
// // so objection can use it
// function setupDb() {
//     const db = knex(knexfile.development);
//     Model.knex(db);
// }
module.exports = setupDb;
const knex_1 = __importDefault(require("knex"));
const objection_1 = require("objection");
const knexfile = require('../data/knexfile');
// Setup knex and objection
// Globally install the database inside all models
// so objection can use it
function setupDb() {
    const db = (0, knex_1.default)(knexfile.development);
    objection_1.Model.knex(db);
}
module.exports = setupDb;
