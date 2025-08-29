// routes/categoriesRoutes.js
import express from 'express';
import { CategoriesController } from '../controllers/categoriesController.js';

const router = express.Router();

// GET /categories – list all categories
router.get('/', CategoriesController.getAll);

// GET /categories/:id – get category by ID
router.get('/:id', CategoriesController.getById);

// POST /categories – create a new category
router.post('/', CategoriesController.create);

// PUT /categories/:id – update category
router.put('/:id', CategoriesController.update);

// DELETE /categories/:id – delete category
router.delete('/:id', CategoriesController.delete);

export default router;
