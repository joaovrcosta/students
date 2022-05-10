import { getRepository, Repository } from "typeorm";
import { ICreateQuestionDTO } from "../../../dtos/ICreateQuestionDTO";
import { IQuestionsRepository } from "../../../repositories/IQuestionsRepository";

import { Question } from "../entities/Question";

class QuestionsRepository implements IQuestionsRepository {
  private repository: Repository<Question>;

  constructor() {
    this.repository = getRepository(Question);
  }

  async create({
    title,
    content,
    category_id,
    author_id

  }: ICreateQuestionDTO): Promise<void> {
    const question = this.repository.create({
      title,
      content,
      category_id,
      author_id
    });

    await this.repository.save(question);
  }

  async findById(id: string): Promise<Question> {
    const question = await this.repository.findOne({ id });
    return question;
  }

  async findAll(title?: string, category_id?: string): Promise<Question[]> {
    const questionsQuery = await this.repository.createQueryBuilder("q");

    if (title) {
      questionsQuery.andWhere("title = :title", { title });
    }
    if (category_id) {
      questionsQuery.andWhere("category = :category", { category_id });
    }

    const questions = await questionsQuery.getMany();

    return questions;
  }
}

export { QuestionsRepository };
