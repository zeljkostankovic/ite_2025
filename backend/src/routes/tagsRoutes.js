import express from 'express';
import * as TagsController from '../controllers/tagsController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', TagsController.getAll);
router.get('/:id', TagsController.getById);
router.post('/', authMiddleware, TagsController.create);
router.put('/:id', authMiddleware, TagsController.update);
router.delete('/:id', authMiddleware, TagsController.delete);

export default router;
