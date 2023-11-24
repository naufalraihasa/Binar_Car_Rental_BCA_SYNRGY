import express, { Request, Response } from 'express';
import userController from '../controllers/userController';
import authMiddleware from '../middlewares/auth';

const route = express.Router();

/**
 * Your Swagger definitions here
 */

// Register Member
route.post(
  '/register',
  userController.registerUser
);

// Login
route.post(
  '/login',
  userController.loginUser
);

// Current User
route.post(
  '/profile',
  authMiddleware,
  userController.getProfileUser
);

export default route;
