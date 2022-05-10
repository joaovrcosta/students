import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs";
import { ICreateStudentsDTO } from "../../dtos/ICreateStudentsDTO";

import { IStudentsRepository } from "../../repositories/IStudentsRepository";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class CreateStudentUseCase {
  constructor(
    @inject("StudentsRepository")
    private studentsRepository: IStudentsRepository
  ) {}

  async execute({
    username,
    email,
    password,
  }: ICreateStudentsDTO): Promise<void> {
    const emailAlreadyExists = await this.studentsRepository.findByEmail(email);

    const usernameAlreadyExists = await this.studentsRepository.findByUsername(username);

    if (emailAlreadyExists) {
      throw new AppError("User already exists");
    }

    if (usernameAlreadyExists) {
      throw new AppError("Username already exists");
    }

    const hashPassword = await hash(password, 8);

    await this.studentsRepository.create({
      username,
      email,
      password: hashPassword,
    });
  }
}

export { CreateStudentUseCase };
