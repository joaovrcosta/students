import { getRepository, Repository } from "typeorm";
import { ICreateAnswerDTO } from "../../../dtos/ICreateAnswerDTO";
import { IAnswerRepository } from "../../../repositories/IAnswerRepository";
import { Answer } from "../entities/Answer";

class AnswersRepository implements IAnswerRepository {
  private repository: Repository<Answer>;

  constructor() {
    this.repository = getRepository(Answer);
  }

  async create({
    author_id,
    question_id,
    content,
  }: ICreateAnswerDTO): Promise<void> {
    const answer = this.repository.create({
      author_id,
      question_id,
      content,
    });

    await this.repository.save(answer);
  }
}

export { AnswersRepository };
