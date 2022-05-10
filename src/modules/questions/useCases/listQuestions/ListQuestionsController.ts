import { Request, Response } from 'express'
import { container } from 'tsyringe';
import { ListQuestionsUseCase } from './ListQuestionsUseCase';

class ListQuestionController {
    async handle(request: Request, response: Response): Promise<Response> {
      const {id, title, category_id} = request.query;

      const listQuestionsUseCase = container.resolve(ListQuestionsUseCase)

      const questions = await listQuestionsUseCase.execute({
          id: id as string,
          title: title as string, 
          category_id: category_id as string,
      })

      return response.json(questions)
    }
}

export { ListQuestionController }