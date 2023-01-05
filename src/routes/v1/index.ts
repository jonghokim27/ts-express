/**
 * Module dependencies
 */

import express, { Router, Request, Response } from 'express';

/**
 * Express Router
 */

const router: Router = express.Router();

// User
router.use("/user", require("./userRouter"));

module.exports = router;