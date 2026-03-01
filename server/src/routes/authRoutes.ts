import express from "express";

import {
  getUserInfo,
  LoginUser,
  registerUser,
} from "../controllers/authController";

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", LoginUser);

router.get("/getUser", getUserInfo);

export default router;
