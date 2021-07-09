import { Router } from 'express';

// controllers
import StudentController from '../controllers/StudentController';

// middlewares
import loginRequired from '../middlewares/loginRequired';

const studentRoutes = new Router();

studentRoutes.get('/', StudentController.index);
studentRoutes.post('/', loginRequired, StudentController.store);
studentRoutes.put('/:id', loginRequired, StudentController.update);
studentRoutes.get('/:id', StudentController.show);
studentRoutes.delete('/:id', loginRequired, StudentController.delete);

export default studentRoutes;
