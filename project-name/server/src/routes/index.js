import express from 'express';
import { getExampleData, postExampleData } from '../controllers/index.js';

const router = express.Router();

export function setRoutes(app) {
  router.get('/example', getExampleData);
  router.post('/example', postExampleData);
  
  app.use('/api', router);
}