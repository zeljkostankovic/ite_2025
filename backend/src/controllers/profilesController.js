import { ProfileModel } from '../models/profilesModel.js';

export const ProfilesController = {
  // --- List all profiles ---
  getAll: async (req, res) => {
    try {
      const profiles = await ProfileModel.getAll();
      res.json(profiles);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch profiles', details: err.message });
    }
  },

  // --- Get profile by user_id ---
  getByUserId: async (req, res) => {
    try {
      const profile = await ProfileModel.getByUserId(req.params.userId);
      if (!profile) return res.status(404).json({ error: 'Profile not found' });
      res.json(profile);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch profile', details: err.message });
    }
  },

  // --- Create profile ---
  create: async (req, res) => {
    try {
      const { user_id, username, avatar, bio } = req.body;
      const newProfile = await ProfileModel.create({ user_id, username, avatar, bio });
      res.status(201).json(newProfile);
    } catch (err) {
      res.status(500).json({ error: 'Failed to create profile', details: err.message });
    }
  },

  // --- Update profile ---
  update: async (req, res) => {
    try {
      const { username, avatar, bio } = req.body;
      const updatedProfile = await ProfileModel.update(req.params.userId, { username, avatar, bio });
      if (!updatedProfile) return res.status(404).json({ error: 'Profile not found' });
      res.json(updatedProfile);
    } catch (err) {
      res.status(500).json({ error: 'Failed to update profile', details: err.message });
    }
  },

  // --- Delete profile ---
  delete: async (req, res) => {
    try {
      const deleted = await ProfileModel.delete(req.params.userId);
      if (!deleted) return res.status(404).json({ error: 'Profile not found' });
      res.json({ message: 'Profile deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: 'Failed to delete profile', details: err.message });
    }
  },
};
