/**
 * Module dependencies
 */

import express, { Router, Request, Response } from 'express';

/**
 * Express Router
 */

const router: Router = express.Router();

// GET / (Health Check)
router.get("/", (req: Request, res: Response) => {
    return res.status(200).json({ error: false, message: "정상" });
});

// v1 Router
router.use('/v1', require('./v1'));

module.exports = router;
