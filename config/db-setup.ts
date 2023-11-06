// import knex from "knex";
// import express, { Express, Request, Response } from 'express';

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

import knex from 'knex';
import { Model } from 'objection';
import { Knex } from 'knex'; // Import Knex types

const knexfile = require('./knexfile');

// Setup knex and objection
// Globally install the database inside all models
// so objection can use it
function setupDb(): void {
  const db: Knex = knex(knexfile.development);
  Model.knex(db);
}

export = setupDb;
