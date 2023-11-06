// import { Knex } from 'knex';

// export const seed = async (knex: Knex): Promise<void> => {
//   // Truncate all existing tables
//   await knex.raw('TRUNCATE TABLE "user" CASCADE');
//   await knex.raw('TRUNCATE TABLE "channel" CASCADE');
//   await knex.raw('TRUNCATE TABLE "video" CASCADE');

//   await knex('channel').insert([
//     { id: 1, name: 'channel1' },
//     { id: 2, name: 'channel2' },
//     { id: 3, name: 'channel3' },
//   ]);
//   await knex('user').insert([
//     { id: 1, name: 'user1', email: 'user1@gmail.com', channelId: 1 },
//     { id: 2, name: 'user2', email: 'user2@gmail.com', channelId: 2 },
//     { id: 3, name: 'user3', email: 'user3@gmail.com' },
//   ]);
//   await knex('video').insert([
//     { id: 1, title: 'video1', channelId: 1 },
//     { id: 2, title: 'video2', channelId: 1 },
//     { id: 3, title: 'video3', channelId: 2 },
//     { id: 4, title: 'video4', channelId: 2 },
//   ]);
// };

import { Knex } from 'knex';
import * as fs from 'fs';
import * as path from 'path';

export async function seed(knex: Knex): Promise<void> {
  // Define the path to the JSON file one folder up
  const jsonFilePath = path.resolve(__dirname, '../json', 'cars.min.json');

  // Read the JSON data from the file
  const jsonData = fs.readFileSync(jsonFilePath, 'utf-8');
  const carsData = JSON.parse(jsonData);

  // Insert the data into the 'cars' table
  await knex('cars').insert(carsData);
}


