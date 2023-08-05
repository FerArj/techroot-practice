import express from 'express'
import * as questionController from '../controllers/questionController.mjs'

const questionRouter = express.Router();

questionRouter.post('/criarPergunta', questionController.criarPergunta);
