import { TagModel } from '../models/tagModel.js';

export const TagsController = {
  getAll: async (req, res) => {
    try {
      const tags = await TagModel.getAll();
      res.json(tags);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getById: async (req, res) => {
    try {
      const tag = await TagModel.getById(req.params.id);
      if (!tag) return res.status(404).json({ message: 'Tag not found' });
      res.json(tag);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  create: async (req, res) => {
    try {
      const tag = await TagModel.create(req.body);
      res.status(201).json(tag);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const updated = await TagModel.update(req.params.id, req.body);
      if (!updated) return res.status(404).json({ message: 'Tag not found' });
      res.json(updated);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      await TagModel.delete(req.params.id);
      res.json({ message: 'Tag deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};
