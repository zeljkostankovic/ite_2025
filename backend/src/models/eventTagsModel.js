import knex from '../db/knex.js';

export const EventTagsModel = {
  getAll: () => knex('event_tags').select('*'),
  getByEventId: (event_id) => knex('event_tags').where({ event_id }),
  getByTagId: (tag_id) => knex('event_tags').where({ tag_id }),
  create: (data) => knex('event_tags').insert(data).returning('*'),
  deleteByEventId: (event_id) => knex('event_tags').where({ event_id }).del(),
  deleteByTagId: (tag_id) => knex('event_tags').where({ tag_id }).del(),
};
