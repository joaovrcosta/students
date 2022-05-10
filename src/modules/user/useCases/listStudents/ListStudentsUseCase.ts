import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { Student } from "../../infra/typeorm/entities/Student";
import { IStudentsRepository } from "../../repositories/IStudentsRepository";

interface IRequest {
  username?: string;
  email?: string;
}

@injectable()
class ListStudentsUseCase {
  constructor(
    @inject("StudentsRepository")
    private studentsRepository: IStudentsRepository
  ) {}

  async execute({ username, email }: IRequest): Promise<Student[]> {
    const students = await this.studentsRepository.list(username, email);

    const emailAlreadyExists = await this.studentsRepository.findByEmail(email);

    if (emailAlreadyExists) {
      throw new AppError("User already exists");
    }

    return students;
  }
}

export { ListStudentsUseCase };
