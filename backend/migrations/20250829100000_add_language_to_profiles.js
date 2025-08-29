// migrations/20250829100000_add_language_to_profiles.js
export async function up(knex) {
  await knex.schema.alterTable('profiles', (table) => {
    table
      .integer('language_id')
      .unsigned()
      .references('id')
      .inTable('languages')
      .onDelete('SET NULL'); // ili 'CASCADE' ako želiš da briše
  });
}

export async function down(knex) {
  await knex.schema.alterTable('profiles', (table) => {
    table.dropColumn('language_id');
  });
}
