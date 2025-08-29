// 20250829100000_create_languages.js
export async function up(knex) {
  await knex.schema.createTable('languages', (table) => {
    table.increments('id').primary();
    table.string('code', 10).notNullable().unique();
    table.string('name').notNullable();
  });
}

export async function down(knex) {
  await knex.schema.dropTableIfExists('languages');
}
