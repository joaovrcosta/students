import { Router } from 'express'

import { authenticateRoutes } from './authenticate.routes';
import { studentsRoutes } from './students.routes';
import { questionsRoutes } from './questions.routes';
import { answersRoutes } from './answers.routes';
import { categoriesRoutes } from './categories.routes';

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/students", studentsRoutes);
router.use(authenticateRoutes);
router.use("/questions", questionsRoutes);
router.use("/answers", answersRoutes);

export { router };