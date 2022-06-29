import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListStudentUseCase } from "./ListStudentUseCase";

class ListStudentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.student

    const listStudentsUseCase = container.resolve(ListStudentUseCase);

    const students = await listStudentsUseCase.execute(id);

    return response.json(students);
  }
}

export { ListStudentController };
