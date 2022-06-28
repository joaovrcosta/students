import { inject, injectable } from "tsyringe";
import { IQuestionsRepository } from "../../repositories/IQuestionsRepository";

interface IRequest {
  title: string;
  content: string;
  category_id: string;
  student_id: string;
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
    student_id
  }: IRequest): Promise<void> {
    await this.questionsRepository.create({
      title,
      content,
      category_id,
      student_id,
    });
  }
}

export { CreateQuestionUseCase };
