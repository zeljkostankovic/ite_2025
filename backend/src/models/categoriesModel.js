import knex from '../db/knex.js';

export const CategoryModel = {
  getAll: () => knex('categories').select('*'),
  getById: (id) => knex('categories').where({ id }).first(),
  create: (data) => knex('categories').insert(data).returning('*'),
  update: (id, data) => knex('categories').where({ id }).update(data).returning('*'),
  delete: (id) => knex('categories').where({ id }).del(),
};
