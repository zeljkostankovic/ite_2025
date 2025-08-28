import 'dotenv/config';

export default {
  development: {
    client: 'pg', // mysql2
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }
};