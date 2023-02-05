import express  from "express";

import { login, signup } from "../controllers/auth.js" //".js" must be written as this is node.js 

const router = express.Router();

router.post('/signup', () => {})
router.post('/login', () => {})

export default router;