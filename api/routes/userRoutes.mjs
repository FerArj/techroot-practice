import express from 'express';
import * as userController from '../controllers/userController.mjs'

const userRouter = express.Router();

userRouter.post('/cadastrarUsuario', userController.cadastrarUsuario);

userRouter.post('/autenticarUsuario', userController.autenticarUsuario);

export default userRouter;