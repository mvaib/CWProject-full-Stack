import express from "express"
const router = express.Router();
import { chatHandler } from "../controllers/chat.controller.js";

router.post('/chat', chatHandler);

export default router;