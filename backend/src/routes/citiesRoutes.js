// routes/citiesRoutes.js
import express from 'express';
import { CitiesController } from '../controllers/citiesController.js';

const router = express.Router();

// GET /cities – list all cities
router.get('/', CitiesController.getAll);

// GET /cities/:id – get city by ID
router.get('/:id', CitiesController.getById);

// POST /cities – create a new city
router.post('/', CitiesController.create);

// PUT /cities/:id – update city
router.put('/:id', CitiesController.update);

// DELETE /cities/:id – delete city
router.delete('/:id', CitiesController.delete);

export default router;
