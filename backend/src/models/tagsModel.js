import knex from '../db/knex.js';

export const TagModel = {
  getAll: () => knex('tags').select('*'),
  getById: (id) => knex('tags').where({ id }).first(),
  create: (data) => knex('tags').insert(data).returning('*'),
  update: (id, data) => knex('tags').where({ id }).update(data).returning('*'),
  delete: (id) => knex('tags').where({ id }).del(),
};
