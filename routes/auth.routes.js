import { Router } from "express";
import { roomCode, register } from "../controllers/auth.controller.js";

const router = Router()

router.post('/register', register)
router.get('/roomCode', roomCode);

export default router