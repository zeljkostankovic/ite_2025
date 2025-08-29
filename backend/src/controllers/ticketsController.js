import { TicketModel } from '../models/ticketModel.js';

export const TicketsController = {
  getAll: async (req, res) => {
    try {
      const tickets = await TicketModel.getAll();
      res.json(tickets);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getByUserId: async (req, res) => {
    try {
      const tickets = await TicketModel.getByUserId(req.params.userId);
      res.json(tickets);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getByEventId: async (req, res) => {
    try {
      const tickets = await TicketModel.getByEventId(req.params.eventId);
      res.json(tickets);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  create: async (req, res) => {
    try {
      const ticket = await TicketModel.create(req.body);
      res.status(201).json(ticket);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const updated = await TicketModel.update(req.params.id, req.body);
      res.json(updated);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      await TicketModel.delete(req.params.id);
      res.json({ message: 'Ticket deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};
