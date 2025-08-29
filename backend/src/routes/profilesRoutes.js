import express from 'express';
import { ProfilesController } from '../controllers/profilesController.js';

const router = express.Router();

// --- Get all profiles ---
router.get('/', ProfilesController.getAll);

// --- Get profile by user_id ---
router.get('/:userId', ProfilesController.getByUserId);

// --- Create profile ---
router.post('/', ProfilesController.create);

// --- Update profile ---
router.put('/:userId', ProfilesController.update);

// --- Delete profile ---
router.delete('/:userId', ProfilesController.delete);

export default router;
