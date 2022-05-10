import { ICreateQuestionDTO } from "../dtos/ICreateQuestionDTO";
import { Question } from "../infra/typeorm/entities/Question";

interface IQuestionsRepository {
  create(data: ICreateQuestionDTO): Promise<void>;
  findAll(title?: string, category_id?: string): Promise<Question[]>
  findById(id: string): Promise<Question>
}

export { IQuestionsRepository };
