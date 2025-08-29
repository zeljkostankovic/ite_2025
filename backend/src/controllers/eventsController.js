// controllers/eventController.js
import * as EventModel from '../models/eventModel.js';

// GET /api/events
export const getAllEvents = async (req, res) => {
  try {
    const { page = 1, limit = 10, city, category, search } = req.query;
    const offset = (page - 1) * limit;

    const events = await EventModel.getAll({ limit, offset, city, category, search });
    const total = await EventModel.countAll({ city, category, search });

    res.json({ data: events, total, page: Number(page), limit: Number(limit) });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET /api/events/:id
export const getEventById = async (req, res) => {
  try {
    const event = await EventModel.getById(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });
    res.json(event);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST /api/events
export const createEvent = async (req, res) => {
  try {
    const userId = req.user.id; // iz authMiddleware
    const event = await EventModel.create({ ...req.body, userId });
    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PUT /api/events/:id
export const updateEvent = async (req, res) => {
  try {
    const event = await EventModel.getById(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });

    if (event.user_id !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Forbidden' });
    }

    const updated = await EventModel.update(req.params.id, req.body);
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE /api/events/:id
export const deleteEvent = async (req, res) => {
  try {
    const event = await EventModel.getById(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });

    if (event.user_id !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Forbidden' });
    }

    await EventModel.remove(req.params.id);
    res.json({ message: 'Event deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
