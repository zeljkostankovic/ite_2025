import knex from '../db/knex.js';

export const EventTranslationModel = {
  getAll: () => knex('event_translations').select('*'),
  getByEventId: (event_id) => knex('event_translations').where({ event_id }),
  getById: (id) => knex('event_translations').where({ id }).first(),
  create: (data) => knex('event_translations').insert(data).returning('*'),
  update: (id, data) => knex('event_translations').where({ id }).update(data).returning('*'),
  delete: (id) => knex('event_translations').where({ id }).del(),
};
