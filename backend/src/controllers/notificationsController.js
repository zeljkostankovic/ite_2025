import { NotificationModel } from '../models/notificationModel.js';

export const NotificationsController = {
  getAll: async (req, res) => {
    try {
      const notifications = await NotificationModel.getAll();
      res.json(notifications);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getByUserId: async (req, res) => {
    try {
      const notifications = await NotificationModel.getByUserId(req.params.userId);
      res.json(notifications);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  create: async (req, res) => {
    try {
      const notification = await NotificationModel.create(req.body);
      res.status(201).json(notification);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const updated = await NotificationModel.update(req.params.id, req.body);
      res.json(updated);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      await NotificationModel.delete(req.params.id);
      res.json({ message: 'Notification deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};
