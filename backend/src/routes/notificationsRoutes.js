import express from 'express';
import * as NotificationsController from '../controllers/notificationsController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', NotificationsController.getAll);
router.get('/user/:userId', authMiddleware, NotificationsController.getByUserId);
router.post('/', authMiddleware, NotificationsController.create);
router.put('/:id', authMiddleware, NotificationsController.update);
router.delete('/:id', authMiddleware, NotificationsController.delete);

export default router;
