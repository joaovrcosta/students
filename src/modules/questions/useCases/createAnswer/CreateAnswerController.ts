import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateAnswerUseCase } from "./CreateAnswerUseCase";

class CreateAnswerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { author_id, question_id, content, } = request.body;

    const createAnswerUseCase = container.resolve(CreateAnswerUseCase);

    const answer = await createAnswerUseCase.execute({
      author_id,
      question_id,
      content,
    });

    return response.status(201).json(answer);
  }
}

export { CreateAnswerController };
