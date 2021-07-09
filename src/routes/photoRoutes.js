import { Router } from 'express';

// controllers
import PhotoController from '../controllers/PhotoController';

// middlewares
import loginRequired from '../middlewares/loginRequired';

const photoRoutes = new Router();

photoRoutes.post('/', loginRequired, PhotoController.store);

export default photoRoutes;
