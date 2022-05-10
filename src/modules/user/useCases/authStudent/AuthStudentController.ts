import { Request, Response } from 'express'
import { AuthStudentUseCase } from './AuthStudentUseCase';
import { container } from 'tsyringe'



class AuthStudentController {
    async handle(request: Request, response: Response): Promise<Response> {
        const{password, email} = request.body;

        const authStudentUseCase = container.resolve(AuthStudentUseCase);

        const token = await authStudentUseCase.execute({password, email});

        return response.json(token);
    }
}

export { AuthStudentController }