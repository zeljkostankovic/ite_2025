import { EventTagsModel } from '../models/eventTagsModel.js';

export const EventTagsController = {
  getAll: async (req, res) => {
    try {
      const eventTags = await EventTagsModel.getAll();
      res.json(eventTags);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getByEventId: async (req, res) => {
    try {
      const tags = await EventTagsModel.getByEventId(req.params.eventId);
      res.json(tags);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  create: async (req, res) => {
    try {
      const eventTag = await EventTagsModel.create(req.body);
      res.status(201).json(eventTag);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  deleteByEventId: async (req, res) => {
    try {
      await EventTagsModel.deleteByEventId(req.params.eventId);
      res.json({ message: 'Event tags deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};
