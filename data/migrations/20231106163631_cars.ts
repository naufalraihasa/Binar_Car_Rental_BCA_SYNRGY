// import { Knex } from "knex";


// export async function up(knex: Knex): Promise<void> {
//     return knex.schema
//     .createTable('channel', (table) => {
//       table.increments();
//       table.string('name').notNullable();
//       table.timestamps(true, true);
//     })
//     .createTable('user',(table) => {
//       table.increments();
//       table.string('name').notNullable();
//       table.string('email').notNullable().unique();
//       table.integer('channelId').references('id').inTable('channel').onDelete('CASCADE');
//       table.timestamps(true, true);
//     })
//     .createTable('video', (table) => {
//       table.increments();
//       table.string('title').notNullable();
//       table.integer('channelId').references('id').inTable('channel').onDelete('CASCADE');
//       table.timestamps(true, true);
//     })
// }


// export async function down(knex: Knex): Promise<void> {
//     return knex.schema
//     .dropTableIfExists('video')
//     .dropTableIfExists('user')
//     .dropTableIfExists('channel');
// }

import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("cars", (table) => {
        table.uuid("id").primary().notNullable();
        table.string("plate").notNullable();
        table.string("manufacture").notNullable();
        table.string("model").notNullable();
        table.string("image").notNullable();
        table.integer("rentPerDay").notNullable();
        table.integer("capacity").notNullable();
        table.text("description").notNullable();
        table.timestamp("availableAt").notNullable();
        table.string("transmission").notNullable();
        table.boolean("available").notNullable();
        table.string("type").notNullable();
        table.integer("year").notNullable();
        table.jsonb("options");
        table.jsonb("specs");
      });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema
    .dropTableIfExists('cars')
}

