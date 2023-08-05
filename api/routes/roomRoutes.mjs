import express from "express";
import * as roomController from '../controllers/roomController.mjs'

const roomRouter = express.Router();

roomRouter.post('/criarSala', roomController.criarSala);

export default roomRouter;