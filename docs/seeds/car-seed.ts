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

import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes all existing entries in the "cars" table
  await knex("cars").del();

  // Insert 5 sample records into the "cars" table
  await knex("cars").insert([
    {
      name: "Car 1",
      price: 20000,
      size: "Compact",
      image: "car1.jpg",
    },
    {
      name: "Car 2",
      price: 25000,
      size: "Sedan",
      image: "car2.jpg",
    },
    {
      name: "Car 3",
      price: 30000,
      size: "SUV",
      image: "car3.jpg",
    },
    {
      name: "Car 4",
      price: 35000,
      size: "Truck",
      image: "car4.jpg",
    },
    {
      name: "Car 5",
      price: 40000,
      size: "Convertible",
      image: "car5.jpg",
    },
  ]);
}


