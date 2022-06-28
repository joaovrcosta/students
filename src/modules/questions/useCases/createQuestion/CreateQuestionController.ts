import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateQuestionUseCase } from "./CreateQuestionUseCase";

class CreateQuestionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, content, category_id, student_id } = request.body;

    const createQuestionUseCase = container.resolve(CreateQuestionUseCase);

    const question = await createQuestionUseCase.execute({ title, content, category_id, student_id });

    return response.status(201).json(question);
  }
}

export { CreateQuestionController };
