/**
 * Module dependencies
 */

import { Router } from 'express';
import { login } from '../../controllers/v1/userController';

/**
 * Express Router
 */

const router = Router();

// GET /user/login
router.get("/login", login);


module.exports = router;
