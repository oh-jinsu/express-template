import { Router } from "express";
import { fromView } from "src/functions/path";

const router = Router();

router.get("/", (req, res) => {
    res.sendFile(fromView("health"));
});

export default router;