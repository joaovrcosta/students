import { Router } from "express";
import { CreateQuestionController } from "../../../../modules/questions/useCases/createQuestion/CreateQuestionController";
import { ListQuestionController } from "../../../../modules/questions/useCases/listQuestions/ListQuestionsController";


const questionsRoutes = Router()

const createQuestionController = new CreateQuestionController();
const listQuestionsController = new ListQuestionController();

questionsRoutes.post("/", createQuestionController.handle);

questionsRoutes.get("/ask", listQuestionsController.handle)

export { questionsRoutes }