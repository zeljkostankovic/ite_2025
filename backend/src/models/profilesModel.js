import knex from '../db/knex.js';

export const ProfileModel = {
  getAll: () => knex('profiles').select('*'),
  getById: (id) => knex('profiles').where({ id }).first(),
  getByUserId: (user_id) => knex('profiles').where({ user_id }).first(),
  create: (data) => knex('profiles').insert(data).returning('*'),
  update: (id, data) => knex('profiles').where({ id }).update(data).returning('*'),
  delete: (id) => knex('profiles').where({ id }).del(),
};
