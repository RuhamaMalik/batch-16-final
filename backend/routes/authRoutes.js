import { Router } from "express";
import { profile, signin, signUp } from "../controller/authController.js";
import { middlewareToProtect } from "../middlewares/authMidleware.js";


const router = Router();
 
router.post('/signup', signUp);
router.post('/signin', signin);
router.get("/profile", middlewareToProtect , profile);

export default router;