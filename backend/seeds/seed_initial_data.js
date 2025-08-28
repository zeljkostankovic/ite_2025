import knex from '../src/db/knex.js';
import { faker } from '@faker-js/faker';
import bcrypt from 'bcryptjs';

export async function seed() {
  // Obriši sve tabele obrnutim redosledom zbog FK
  await knex('event_translations').del();
  await knex('event_tags').del();
  await knex('events').del();
  await knex('categories').del();
  await knex('cities').del();
  await knex('profiles').del();
  await knex('users').del();

  // --- Users ---
  const passwordHash = await bcrypt.hash('user1234', 10);
  const users = [
    { email: 'admin@ite.com', password_hash: passwordHash, role: 'admin', created_at: new Date(), updated_at: new Date() },
    { email: 'sr@example.com', password_hash: passwordHash, role: 'user', created_at: new Date(), updated_at: new Date() },
    { email: 'it@example.com', password_hash: passwordHash, role: 'user', created_at: new Date(), updated_at: new Date() },
    { email: 'de@example.com', password_hash: passwordHash, role: 'user', created_at: new Date(), updated_at: new Date() },
  ];

const insertedUsers = await knex('users').insert(users).returning('id');
const userIds = insertedUsers.map(u => u.id);

const profiles = users.map((u, idx) => ({
  user_id: userIds[idx],       // <--- integer, ne objekat
  username: u.email.split('@')[0],
  avatar: faker.image.avatar(),
  bio: faker.lorem.sentence(),
  created_at: new Date(),
  updated_at: new Date()
}));

await knex('profiles').insert(profiles);

// --- Cities ---
const cities = [
  { name: 'Belgrade', created_at: new Date(), updated_at: new Date() },
  { name: 'Rome', created_at: new Date(), updated_at: new Date() },
  { name: 'Berlin', created_at: new Date(), updated_at: new Date() },
];

const insertedCities = await knex('cities').insert(cities).returning('id');
const cityIds = insertedCities.map(c => c.id);

// --- Categories ---
const categories = [
  { name: 'Music', created_at: new Date(), updated_at: new Date() },
  { name: 'Sports', created_at: new Date(), updated_at: new Date() },
  { name: 'Tech', created_at: new Date(), updated_at: new Date() },
];

const insertedCategories = await knex('categories').insert(categories).returning('id');
const categoryIds = insertedCategories.map(c => c.id);

// Eventi
const events = [];
for (let i = 0; i < 5; i++) {
  events.push({
    title: `Event ${i+1}`,
    description: faker.lorem.paragraph(),
    city_id: cityIds[i % cityIds.length],       // <-- sada integer
    category_id: categoryIds[i % categoryIds.length], // <-- integer
    is_free: i % 2 === 0,
    price: i % 2 === 0 ? 0 : faker.number.int({ min: 10, max: 100 }),
    image_url: faker.image.urlLoremFlickr({ category: 'city' }),
    address: faker.location.streetAddress(),
    event_date: new Date(),
    user_id: userIds[i % userIds.length],       // <-- integer
    created_at: new Date(),
    updated_at: new Date()
  });
}

const insertedEvents = await knex('events').insert(events).returning('id');
const eventIds = insertedEvents.map(e => e.id);

  // --- Event Tags ---
  const tags = ['concert', 'football', 'conference', 'workshop', 'festival'];
  const eventTags = [];
  eventIds.forEach((eventId) => {
    const tag = tags[Math.floor(Math.random() * tags.length)];
    eventTags.push({ event_id: eventId, tag, created_at: new Date(), updated_at: new Date() });
  });
  await knex('event_tags').insert(eventTags);

  // --- Event Translations ---
  const languages = ['en', 'sr', 'it', 'de'];
  const eventTranslations = [];
  eventIds.forEach((eventId) => {
    languages.forEach((lang) => {
      eventTranslations.push({
        event_id: eventId,
        language: lang,
        title: `${faker.lorem.words({ min: 2, max: 4 })} [${lang}]`,
        description: faker.lorem.sentences({ min: 1, max: 3 }),
        created_at: new Date(),
        updated_at: new Date()
      });
    });
  });
  await knex('event_translations').insert(eventTranslations);

  // --- Notifications ---
const notifications = [];
userIds.forEach((userId) => {
  notifications.push(
    {
      user_id: userId,
      type: 'info',
      message: 'Welcome to the platform!',
      is_read: false,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      user_id: userId,
      type: 'reminder',
      message: 'Don’t forget to complete your profile!',
      is_read: false,
      created_at: new Date(),
      updated_at: new Date(),
    }
  );
});
await knex('notifications').insert(notifications);

  console.log('✅ Seed finished successfully.');
}
