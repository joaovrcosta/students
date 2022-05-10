import { inject, injectable } from "tsyringe";
import { Question } from "../../infra/typeorm/entities/Question";
import { IQuestionsRepository } from "../../repositories/IQuestionsRepository";

interface IRequest {
  id?: string;
  title?: string;
  category_id?: string;
}

@injectable()
class ListQuestionsUseCase {
  constructor(
    @inject("QuestionsRepository")
    private questionsRepository: IQuestionsRepository) {}

  async execute({title, category_id }: IRequest): Promise<Question[]> {
    const questions = await this.questionsRepository.findAll(title, category_id);
    return questions;
  }
}

export { ListQuestionsUseCase };
