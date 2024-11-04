import express from "express";
import { signUp } from "../controllers/authController.js";



const authRoutes = express.Router();



authRoutes.post("/signup", signUp)


export default authRoutes