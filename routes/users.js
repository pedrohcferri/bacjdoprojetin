import express from "express";
import { createCategory, createProduct, createUsers, getUsers } from "../controllers/user.js";

const userRoutes = express.Router();

userRoutes.get("/", getUsers);

userRoutes.post("/", createUsers);

userRoutes.post("/category", createCategory);

userRoutes.post("/product", createProduct);

export default userRoutes;