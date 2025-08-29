import { UserModel } from '../models/usersModel.js';
import bcrypt from 'bcryptjs';

export const UsersController = {
  // --- List all users ---
  getAll: async (req, res) => {
    try {
      const users = await UserModel.getAll();
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch users', details: err.message });
    }
  },

  // --- Get single user by ID ---
  getById: async (req, res) => {
    try {
      const user = await UserModel.getById(req.params.id);
      if (!user) return res.status(404).json({ error: 'User not found' });
      res.json(user);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch user', details: err.message });
    }
  },

  // --- Create new user ---
  create: async (req, res) => {
    try {
      const { email, password, role } = req.body;
      const password_hash = await bcrypt.hash(password, 10);
      const newUser = await UserModel.create({ email, password_hash, role });
      res.status(201).json(newUser);
    } catch (err) {
      res.status(500).json({ error: 'Failed to create user', details: err.message });
    }
  },

  // --- Update existing user ---
  update: async (req, res) => {
    try {
      const { email, password, role } = req.body;
      let updatedData = { email, role };
      if (password) {
        updatedData.password_hash = await bcrypt.hash(password, 10);
      }
      const updatedUser = await UserModel.update(req.params.id, updatedData);
      if (!updatedUser) return res.status(404).json({ error: 'User not found' });
      res.json(updatedUser);
    } catch (err) {
      res.status(500).json({ error: 'Failed to update user', details: err.message });
    }
  },

  // --- Delete user ---
  delete: async (req, res) => {
    try {
      const deleted = await UserModel.delete(req.params.id);
      if (!deleted) return res.status(404).json({ error: 'User not found' });
      res.json({ message: 'User deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: 'Failed to delete user', details: err.message });
    }
  },
};
