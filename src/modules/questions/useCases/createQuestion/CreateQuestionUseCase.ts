import { inject, injectable } from "tsyringe";
import { IQuestionsRepository } from "../../repositories/IQuestionsRepository";

interface IRequest {
  title: string;
  content: string;
  category_id: string;
  author_id: string;
}

@injectable()
class CreateQuestionUseCase {
  constructor(
    @inject("QuestionsRepository")
    private questionsRepository: IQuestionsRepository
  ) {}

  async execute({ 
    title, 
    content, 
    category_id,
    author_id
  }: IRequest): Promise<void> {
    await this.questionsRepository.create({
      title,
      content,
      category_id,
      author_id,
    });
  }
}

export { CreateQuestionUseCase };
