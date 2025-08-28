export async function up(knex) {
  await knex.schema.createTable('events', (table) => {
    table.increments('id').primary();
    table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
    table.string('title').notNullable();
    table.text('description');
    table.integer('city_id').unsigned().references('id').inTable('cities').onDelete('SET NULL');
    table.integer('category_id').unsigned().references('id').inTable('categories').onDelete('SET NULL');
    table.boolean('is_free').defaultTo(true);
    table.decimal('price', 10, 2);
    table.string('address');
    table.string('image_url');
    table.dateTime('event_date').notNullable();
    table.timestamps(true, true);
  });
}

export async function down(knex) {
  await knex.schema.dropTableIfExists('events');
}
