import { Router } from 'express';

// controllers
import HomeController from '../controllers/HomeController';

const homeRoutes = new Router();

homeRoutes.get('/', HomeController.index);

export default homeRoutes;
