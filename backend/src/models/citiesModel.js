import knex from '../db/knex.js';

export const CityModel = {
  getAll: () => knex('cities').select('*'),
  getById: (id) => knex('cities').where({ id }).first(),
  create: (data) => knex('cities').insert(data).returning('*'),
  update: (id, data) => knex('cities').where({ id }).update(data).returning('*'),
  delete: (id) => knex('cities').where({ id }).del(),
};
