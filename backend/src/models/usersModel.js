import knex from '../db/knex.js';

export const UserModel = {
  getAll: () => knex('users').select('*'),
  getById: (id) => knex('users').where({ id }).first(),
  getByEmail: (email) => knex('users').where({ email }).first(),
  create: (data) => knex('users').insert(data).returning('*'),
  update: (id, data) => knex('users').where({ id }).update(data).returning('*'),
  delete: (id) => knex('users').where({ id }).del(),
};
