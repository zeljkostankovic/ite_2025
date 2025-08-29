import 'dotenv/config';
import express from 'express';

// --- Routes ---
import usersRoutes from './src/routes/usersRoutes.js';
import profilesRoutes from './src/routes/profilesRoutes.js';
import citiesRoutes from './src/routes/citiesRoutes.js';
import categoriesRoutes from './src/routes/categoriesRoutes.js';
import eventsRoutes from './src/routes/eventsRoutes.js';
import eventLocationsRoutes from './src/routes/eventLocationsRoutes.js';
import tagsRoutes from './src/routes/tagsRoutes.js';
import eventTagsRoutes from './src/routes/eventTagsRoutes.js';
import notificationsRoutes from './src/routes/notificationsRoutes.js';

const app = express();
app.use(express.json());

// --- API Routes ---
app.use('/api/users', usersRoutes);
app.use('/api/profiles', profilesRoutes);
app.use('/api/cities', citiesRoutes);
app.use('/api/categories', categoriesRoutes);
app.use('/api/events', eventsRoutes);
app.use('/api/event-locations', eventLocationsRoutes);
app.use('/api/tags', tagsRoutes);
app.use('/api/event-tags', eventTagsRoutes);
app.use('/api/notifications', notificationsRoutes);

app.get('/', (req, res) => {
  res.send('API is online!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
