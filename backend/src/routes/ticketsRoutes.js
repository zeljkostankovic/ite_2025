import express from 'express';
import * as TicketsController from '../controllers/ticketsController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', TicketsController.getAll);
router.get('/user/:userId', authMiddleware, TicketsController.getByUserId);
router.get('/event/:eventId', TicketsController.getByEventId);
router.post('/', authMiddleware, TicketsController.create);
router.put('/:id', authMiddleware, TicketsController.update);
router.delete('/:id', authMiddleware, TicketsController.delete);

export default router;
