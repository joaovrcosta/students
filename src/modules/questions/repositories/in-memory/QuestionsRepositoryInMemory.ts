import { ICreateQuestionDTO } from "../../dtos/ICreateQuestionDTO";
import { Question } from "../../infra/typeorm/entities/Question";
import { IQuestionsRepository } from "../IQuestionsRepository";

class QuestionsRepositoryInMemory implements IQuestionsRepository {
  questions: Question[] = [];

  async create({
    title,
    contents,
    category,
  }: ICreateQuestionDTO): Promise<void> {
    const question = new Question();

    Object.assign(question, {
      title,
      contents,
      category,
    });
    this.questions.push(question);
  }

  async findAll(title?: string, category?: string): Promise<Question[]> {
    const all = this.questions.filter(
      (question) =>
        (title && question.title === title) ||
        (category && question.category === category)
    );
    return all;
  }
}

export { QuestionsRepositoryInMemory };
