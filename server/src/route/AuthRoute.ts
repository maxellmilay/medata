import express from 'express';
import { login, signup } from '../controller/AuthController.js';

const AuthRouter = express.Router();

AuthRouter.route(LOGIN).get(login);
AuthRouter.route(SIGNUP).post(signup);

export default AuthRouter;
