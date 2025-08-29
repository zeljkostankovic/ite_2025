import express from 'express';
import { UsersController } from '../controllers/usersController.js';

const router = express.Router();

// CRUD rute za korisnike
router.get('/', UsersController.getAll);
router.get('/:id', UsersController.getById);
router.post('/', UsersController.create);
router.put('/:id', UsersController.update);
router.delete('/:id', UsersController.delete);

export default router;
