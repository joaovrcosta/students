import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateStudentAvatarUseCase } from "./UpdateStudentAvatarUseCase";

class UpdateStudentAvatarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.student;

    const avatar_file = request.file.filename;

    const updateStudentAvatarUseCase = container.resolve(
      UpdateStudentAvatarUseCase
    );

    await updateStudentAvatarUseCase.execute({ student_id: id, avatar_file });

    return response.status(204).send();
  }
}

export { UpdateStudentAvatarController };
