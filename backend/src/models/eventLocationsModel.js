import knex from '../db/knex.js';

export const EventLocationModel = {
  getAll: () => knex('event_locations').select('*'),

  getById: (id) => knex('event_locations').where({ id }).first(),

  getByEventId: (event_id) =>
    knex('event_locations').where({ event_id }).first(),

  create: (data) =>
    knex('event_locations').insert(data).returning('*'),

  update: (id, data) =>
    knex('event_locations').where({ id }).update(data).returning('*'),

  delete: (id) =>
    knex('event_locations').where({ id }).del(),
};
