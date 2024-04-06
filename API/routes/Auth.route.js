import express from "express"
import { SignUp } from "../controllers/Auth.controller.js";

const router=express.Router();

router.post('/SignUp',SignUp)


export default router;