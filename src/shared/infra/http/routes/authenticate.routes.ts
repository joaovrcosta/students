import { Router } from 'express';
import { AuthStudentController } from '../../../../modules/user/useCases/authStudent/AuthStudentController';

const authenticateRoutes = Router();

const authStudentController = new AuthStudentController();

authenticateRoutes.post("/sessions", authStudentController.handle)

export { authenticateRoutes }