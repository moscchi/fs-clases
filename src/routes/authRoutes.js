import { Router } from "express";
import {
  loginController,
  registerController,
} from "../controller/authController.js";
import { check } from "express-validator";
import validator from "../utils/validator.js";
const router = Router();

router.post(
  "/login",
  [
    check("email", "El email es obligatorio").isEmail(),
    //check("password", "El password es obligatorio").isStrongPassword(),
    validator,
  ],
  loginController
);
router.post(
  "/register",
  [
    check("email", "El email es obligatorio").isEmail(),
    //check("password", "El password es obligatorio").isStrongPassword(),
    validator,
  ],
  registerController
);
export default router;
