import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateStudentUseCase } from "../../useCases/createStudent/CreateStudentUseCase";


class CreateStudentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { username, email, password } = request.body;
    console.log(request.body)
    
    const createStudentUseCase = container.resolve(CreateStudentUseCase);
    
    await createStudentUseCase.execute({
      username,
      email,
      password,
    });
  
    return response.status(201).send();
  }
}

export { CreateStudentController };
