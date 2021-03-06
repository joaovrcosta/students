import { Router } from "express";
import { CreateAnswerController } from "../../../../modules/questions/useCases/createAnswer/CreateAnswerController";

const answersRoutes = Router();

const createAnswerController = new CreateAnswerController()

answersRoutes.post("/", createAnswerController.handle)

export { answersRoutes }