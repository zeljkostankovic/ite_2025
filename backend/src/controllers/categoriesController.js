// controllers/categoriesController.js
import { CategoryModel } from '../models/categoriesModel.js';

export const CategoriesController = {
  getAll: async (req, res) => {
    try {
      const categories = await CategoryModel.getAll();
      res.json(categories);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch categories', details: err.message });
    }
  },

  getById: async (req, res) => {
    try {
      const category = await CategoryModel.getById(req.params.id);
      if (!category) return res.status(404).json({ error: 'Category not found' });
      res.json(category);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch category', details: err.message });
    }
  },

  create: async (req, res) => {
    try {
      const { name } = req.body;
      const newCategory = await CategoryModel.create({ name });
      res.status(201).json(newCategory);
    } catch (err) {
      res.status(500).json({ error: 'Failed to create category', details: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const { name } = req.body;
      const updatedCategory = await CategoryModel.update(req.params.id, { name });
      if (!updatedCategory) return res.status(404).json({ error: 'Category not found' });
      res.json(updatedCategory);
    } catch (err) {
      res.status(500).json({ error: 'Failed to update category', details: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      const deleted = await CategoryModel.delete(req.params.id);
      if (!deleted) return res.status(404).json({ error: 'Category not found' });
      res.json({ message: 'Category deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: 'Failed to delete category', details: err.message });
    }
  },
};
