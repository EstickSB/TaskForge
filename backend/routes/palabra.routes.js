import { Router } from "express";

import { 
    palabrasGet, 
    palabraGet, 
    palabraPost,
    palabraUpdate, 
    palabraDelete  
} from "../routes/palabra.controller.js";

const router = Router();

router.get("/palabras", palabrasGet);
router.get("/palabra/:id", palabraGet);
router.post("/palabra", palabraPost);
router.put("/palabra/:id", palabraUpdate);
router.delete("/palabra/:id", palabraDelete);

export default router;
