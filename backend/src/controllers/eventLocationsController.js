// controllers/eventLocationsController.js
import * as EventLocationModel from '../models/eventLocationsModel.js';

// Get all event locations
export const getAllEventLocations = async (req, res) => {
  try {
    const locations = await EventLocationModel.getAll();
    res.json(locations);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching event locations', error });
  }
};

// Get event location by ID
export const getEventLocationById = async (req, res) => {
  try {
    const { id } = req.params;
    const location = await EventLocationModel.getById(id);
    if (!location) {
      return res.status(404).json({ message: 'Event location not found' });
    }
    res.json(location);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching event location', error });
  }
};

// Create new event location
export const createEventLocation = async (req, res) => {
  try {
    const data = req.body;
    const newLocation = await EventLocationModel.create(data);
    res.status(201).json(newLocation);
  } catch (error) {
    res.status(500).json({ message: 'Error creating event location', error });
  }
};

// Update event location
export const updateEventLocation = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updatedLocation = await EventLocationModel.update(id, data);
    if (!updatedLocation) {
      return res.status(404).json({ message: 'Event location not found' });
    }
    res.json(updatedLocation);
  } catch (error) {
    res.status(500).json({ message: 'Error updating event location', error });
  }
};

// Delete event location
export const deleteEventLocation = async (req, res) => {
  try {
    const { id } = req.params;
    const success = await EventLocationModel.remove(id);
    if (!success) {
      return res.status(404).json({ message: 'Event location not found' });
    }
    res.json({ message: 'Event location deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting event location', error });
  }
};
