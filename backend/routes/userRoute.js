import express from "express";
import { getOtherUsers, register } from "../controllers/userControllers.js";
import { login } from "../controllers/userControllers.js";
import { logout } from "../controllers/userControllers.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/").get(isAuthenticated,getOtherUsers);

export default router;