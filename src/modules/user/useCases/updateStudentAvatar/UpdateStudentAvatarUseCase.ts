import { inject, injectable } from "tsyringe";
import { deleteFile } from "../../../../utils/file";
import { IStudentsRepository } from "../../repositories/IStudentsRepository";

interface IRequest {
  student_id: string;
  avatar_file: string;
}

@injectable()
class UpdateStudentAvatarUseCase {
  constructor(
    @inject("StudentsRepository")
    private studentsRepository: IStudentsRepository
  ) {}

  async execute({ student_id, avatar_file }: IRequest): Promise<void> {
    const student = await this.studentsRepository.findById(student_id);

    if (student.avatar) {
    await deleteFile(`./tmp/avatar/${student.avatar}`)
    }
    
    student.avatar = avatar_file;

    await this.studentsRepository.create(student);
  }
}

export { UpdateStudentAvatarUseCase };
