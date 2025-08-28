export async function up(knex) {
  await knex.schema.createTable('event_translations', (table) => {
    table.increments('id').primary();
    table.integer('event_id').unsigned().references('id').inTable('events').onDelete('CASCADE');
    table.string('language').notNullable();
    table.string('title').notNullable();
    table.text('description');
    table.timestamps(true, true);
  });
}

export async function down(knex) {
  await knex.schema.dropTableIfExists('event_translations');
}
