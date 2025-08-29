// controllers/citiesController.js
import { CityModel } from '../models/citiesModel.js';

export const CitiesController = {
  getAll: async (req, res) => {
    try {
      const cities = await CityModel.getAll();
      res.json(cities);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch cities', details: err.message });
    }
  },

  getById: async (req, res) => {
    try {
      const city = await CityModel.getById(req.params.id);
      if (!city) return res.status(404).json({ error: 'City not found' });
      res.json(city);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch city', details: err.message });
    }
  },

  create: async (req, res) => {
    try {
      const { name } = req.body;
      const newCity = await CityModel.create({ name });
      res.status(201).json(newCity);
    } catch (err) {
      res.status(500).json({ error: 'Failed to create city', details: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const { name } = req.body;
      const updatedCity = await CityModel.update(req.params.id, { name });
      if (!updatedCity) return res.status(404).json({ error: 'City not found' });
      res.json(updatedCity);
    } catch (err) {
      res.status(500).json({ error: 'Failed to update city', details: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      const deleted = await CityModel.delete(req.params.id);
      if (!deleted) return res.status(404).json({ error: 'City not found' });
      res.json({ message: 'City deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: 'Failed to delete city', details: err.message });
    }
  },
};
