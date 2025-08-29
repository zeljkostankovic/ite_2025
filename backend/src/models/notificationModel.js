import knex from '../db/knex.js';

export const NotificationModel = {
  getAll: () => knex('notifications').select('*'),
  getById: (id) => knex('notifications').where({ id }).first(),
  getByUserId: (user_id) => knex('notifications').where({ user_id }),
  create: (data) => knex('notifications').insert(data).returning('*'),
  update: (id, data) => knex('notifications').where({ id }).update(data).returning('*'),
  delete: (id) => knex('notifications').where({ id }).del(),
};
