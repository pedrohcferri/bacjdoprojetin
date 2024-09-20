import express from "express";
import { createUsers, getUsers } from "../controllers/user.js";

const userRoutes = express.Router();

userRoutes.get("/", getUsers);

userRoutes.post("/", createUsers);

export default userRoutes;