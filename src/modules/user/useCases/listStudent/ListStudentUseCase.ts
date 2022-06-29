import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { StudentDTO } from "../../dtos/StudentDTO";
import { Student } from "../../infra/typeorm/entities/Student";
import { IStudentsRepository } from "../../repositories/IStudentsRepository";

@injectable()
class ListStudentUseCase {
  constructor(
    @inject("StudentsRepository")
    private studentsRepository: IStudentsRepository
  ) {}

  async execute(id: string): Promise<StudentDTO> {
    const students = await this.studentsRepository.findById(id);

    if (!students) {
      throw new AppError("Student not exits");
    }

    return new StudentDTO(
      students.id,
      students.username,
      students.email,
      students.avatar
    );
  }
}

export { ListStudentUseCase };
