// backend/src/models/eventModel.js
import knex from '../db/knex.js';

export const getAll = ({ limit = 10, offset = 0, city, category, search }) => {
  let query = knex('events').select('*').limit(limit).offset(offset);
  if (city) query.where('city_id', city);
  if (category) query.where('category_id', category);
  if (search) query.whereILike('title', `%${search}%`);
  return query;
};

export const countAll = ({ city, category, search }) => {
  let query = knex('events').count({ count: '*' });
  if (city) query.where('city_id', city);
  if (category) query.where('category_id', category);
  if (search) query.whereILike('title', `%${search}%`);
  return query.first().then(r => Number(r.count));
};

export const getById = (id) => knex('events').where({ id }).first();
export const create = (data) => knex('events').insert(data).returning('*');
export const update = (id, data) => knex('events').where({ id }).update(data).returning('*');
export const remove = (id) => knex('events').where({ id }).del();
