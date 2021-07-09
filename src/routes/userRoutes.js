import { Router } from 'express';

// controllers
import UserController from '../controllers/UserController';

// middlewares
import loginRequired from '../middlewares/loginRequired';

const userRoutes = new Router();

// Não deveria existir
// userRoutes.get('/', UserController.index); // lista usuarios
// userRoutes.get('/:id', UserController.show); // lista usuario

userRoutes.post('/', loginRequired, UserController.store);
userRoutes.put('/', loginRequired, UserController.update);
userRoutes.delete('/', loginRequired, UserController.delete);

export default userRoutes;
