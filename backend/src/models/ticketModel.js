import knex from '../db/knex.js';

export const TicketModel = {
  getAll: () => knex('tickets').select('*'),
  getById: (id) => knex('tickets').where({ id }).first(),
  getByUserId: (user_id) => knex('tickets').where({ user_id }),
  getByEventId: (event_id) => knex('tickets').where({ event_id }),
  create: (data) => knex('tickets').insert(data).returning('*'),
  update: (id, data) => knex('tickets').where({ id }).update(data).returning('*'),
  delete: (id) => knex('tickets').where({ id }).del(),
};
