import express from 'express';
import * as EventTranslationsController from '../controllers/eventTranslationsController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', EventTranslationsController.getAll);
router.get('/event/:eventId', EventTranslationsController.getByEventId);
router.post('/', authMiddleware, EventTranslationsController.create);
router.put('/:id', authMiddleware, EventTranslationsController.update);
router.delete('/:id', authMiddleware, EventTranslationsController.delete);

export default router;
