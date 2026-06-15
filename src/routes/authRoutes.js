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

authRoutes.post('/auth/register', celebrate(registerUserSchema), registerUser);

authRoutes.post('/auth/login', celebrate(loginUserSchema), loginUser);

authRoutes.post('/auth/refresh', refreshUserSession);

authRoutes.post('/auth/logout', logoutUser);

export default authRoutes;
