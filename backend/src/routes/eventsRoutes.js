// routes/eventsRoutes.js
import express from 'express';
import * as EventController from '../controllers/eventsController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

// GET /api/events - list all with pagination + filters
router.get('/', EventController.getAllEvents);

// GET /api/events/:id - get single event
router.get('/:id', EventController.getEventById);

// POST /api/events - create (only logged in users)
router.post('/', authMiddleware, EventController.createEvent);

// PUT /api/events/:id - update (only owner or admin)
router.put('/:id', authMiddleware, EventController.updateEvent);

// DELETE /api/events/:id - delete (only owner or admin)
router.delete('/:id', authMiddleware, EventController.deleteEvent);

export default router;
