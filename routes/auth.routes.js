import { Router } from "express";
import { roomCode, register, selectRole, getUsersInRoom  } from "../controllers/auth.controller.js";

const router = Router()

router.post('/register', register);
router.get('/roomCode', roomCode);
router.put('/selectRole', selectRole);
router.get('/roomUsers/:roomCode', getUsersInRoom );

export default router