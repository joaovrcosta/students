import { inject, injectable } from "tsyringe";
import { IAnswerRepository } from "../../repositories/IAnswerRepository";

interface IRequest {
  author_id: string;
  question_id: string;
  content: string;
}

@injectable()
class CreateAnswerUseCase {
  constructor(
    @inject("AnswersRepository")
    private answerRepository: IAnswerRepository
  ) {}

  async execute({ 
    author_id, 
    question_id, 
    content 
  }: IRequest): Promise<void> {
    await this.answerRepository.create({
      author_id,
      question_id,
      content,
    });
  }
}

export { CreateAnswerUseCase };
