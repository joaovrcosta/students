import { container } from "tsyringe";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { Response, Request } from "express";

class CreateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title } = request.body;

    const createCategoryUseCase = container.resolve(CreateCategoryUseCase);

    await createCategoryUseCase.execute({ title });

    return response.status(201).send();
  }
}

export { CreateCategoryController };
