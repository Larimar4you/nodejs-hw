import { Router } from 'express';
import { celebrate } from 'celebrate';

import {
  registerUser,
  loginUser,
  refreshUserSession,
  logoutUser,
} from '../controllers/authController.js';

import {
  registerUserSchema,
  loginUserSchema,
} from '../validations/authValidation.js';

const authRoutes = Router();

authRoutes.post('/register', celebrate(registerUserSchema), registerUser);

authRoutes.post('/login', celebrate(loginUserSchema), loginUser);

authRoutes.post('/refresh', refreshUserSession);

authRoutes.post('/logout', logoutUser);

export default authRoutes;
