import { Router } from "express";
import { roomCode, register, selectRole } from "../controllers/auth.controller.js";

const router = Router()

router.post('/register', register);
router.get('/roomCode', roomCode);
router.put('/selectRole', selectRole);

export default router