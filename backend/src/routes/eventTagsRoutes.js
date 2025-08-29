import express from 'express';
import * as EventTagsController from '../controllers/eventTagsController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', EventTagsController.getAll);
router.get('/event/:eventId', EventTagsController.getByEventId);
router.post('/', authMiddleware, EventTagsController.create);
router.delete('/event/:eventId', authMiddleware, EventTagsController.deleteByEventId);

export default router;
