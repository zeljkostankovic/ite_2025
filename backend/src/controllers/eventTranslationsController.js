import { EventTranslationModel } from '../models/eventTranslationModel.js';

export const EventTranslationsController = {
  getAll: async (req, res) => {
    try {
      const translations = await EventTranslationModel.getAll();
      res.json(translations);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getByEventId: async (req, res) => {
    try {
      const translations = await EventTranslationModel.getByEventId(req.params.eventId);
      res.json(translations);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  create: async (req, res) => {
    try {
      const translation = await EventTranslationModel.create(req.body);
      res.status(201).json(translation);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const updated = await EventTranslationModel.update(req.params.id, req.body);
      res.json(updated);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      await EventTranslationModel.delete(req.params.id);
      res.json({ message: 'Event translation deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};
