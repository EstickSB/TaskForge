import { Router } from "express";

import { 
    wordsGet, 
    wordGet, 
    wordPost,
    wordUpdate, 
    wordDelete 
} from "../routes/words.controller.js";

const router = Router();

router.get("/words", wordsGet);
router.get("/word/:id", wordGet);
router.post("/word", wordPost);
router.put("/word/:id", wordUpdate);
router.delete("/word/:id", wordDelete);

export default router;
