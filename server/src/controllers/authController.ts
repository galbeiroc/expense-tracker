import { Request, Response } from "express";
import jwt from "jsonwebtoken";

//Generate JWT token
const generateToken = (id: string) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

// Register user
export const registerUser = async (req: Request, res: Response) => {};

// Login user
export const LoginUser = async (req: Request, res: Response) => {};

// Get user info
export const getUserInfo = async (req: Request, res: Response) => {};
