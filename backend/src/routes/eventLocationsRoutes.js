import express from 'express';
import * as EventLocationController from '../controllers/eventLocationsController.js';

const router = express.Router();

// CRUD
router.get('/', EventLocationController.getAllEventLocations);
router.get('/:id', EventLocationController.getEventLocationById);
router.post('/', EventLocationController.createEventLocation);
router.put('/:id', EventLocationController.updateEventLocation);
router.delete('/:id', EventLocationController.deleteEventLocation);

export default router;
