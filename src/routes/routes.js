import express from 'express';
import CandyController from '../controllers/CandyController';
export  const routes = express.Router();

routes.get("/", getAll);