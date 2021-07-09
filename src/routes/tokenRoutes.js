import { Router } from 'express';

// controllers
import TokenController from '../controllers/TokenController';

const tokenRoutes = new Router();

tokenRoutes.post('/', TokenController.store);

export default tokenRoutes;
