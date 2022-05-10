import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListStudentsUseCase } from "./ListStudentsUseCase";

class ListStudentsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { username, email } = request.query;

    const listStudentsUseCase = container.resolve(ListStudentsUseCase);

    const students = await listStudentsUseCase.execute({
        username: username as string, 
        email: email as string,
    });

    return response.json(students);
  }
}

export { ListStudentsController };
