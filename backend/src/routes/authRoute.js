import express from "express";

const router = express.Router();
const {loginController,registerController} = import("../controllers/authController");

loginController()