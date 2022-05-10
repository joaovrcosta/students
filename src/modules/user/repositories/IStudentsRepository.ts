import { Student } from "../infra/typeorm/entities/Student";
import { ICreateStudentsDTO } from "../dtos/ICreateStudentsDTO";

interface IStudentsRepository {
  create(data: ICreateStudentsDTO): Promise<void>;
  findByEmail(email: string): Promise<Student>;
  findById(id: string): Promise<Student>;
  findByUsername(username: string): Promise<Student>
  list(username?: string, email?: string ): Promise<Student[]>
}

export { IStudentsRepository };
