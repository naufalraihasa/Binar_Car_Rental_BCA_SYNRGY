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
    await knex.schema.createTable("cars", (table) => {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.decimal("price").notNullable();
        table.string("size");
        table.string("image");
        table.timestamps(true, true);
    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("cars");
}

