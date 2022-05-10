import { AppError } from "../../../../shared/errors/AppError";
import { ICreateStudentsDTO } from "../../dtos/ICreateStudentsDTO";
import { StudentRepositoryInMemory } from "../../repositories/in-memory/StudentsRepositoryInMemory";
import { CreateStudentUseCase } from "../createStudent/CreateStudentUseCase";
import { AuthStudentUseCase } from "./AuthStudentUseCase";

let authenticateStudentUseCase: AuthStudentUseCase;
let studentsRepositoryInMemory: StudentRepositoryInMemory;
let createStudentUseCase: CreateStudentUseCase;

describe("Authenticate User", () => {
  beforeEach(() => {
    studentsRepositoryInMemory = new StudentRepositoryInMemory();

    authenticateStudentUseCase = new AuthStudentUseCase(
      studentsRepositoryInMemory
    );
    createStudentUseCase = new CreateStudentUseCase(studentsRepositoryInMemory);
  });

  it("should be able to authenticate an user", async () => {
    const student: ICreateStudentsDTO = {
      username: "User Test",
      email: "user@test.com",
      password: "1234",
    };
    await createStudentUseCase.execute(student);

    const result = await authenticateStudentUseCase.execute({
      email: student.email,
      password: student.password,
    });
    expect(result).toHaveProperty("token");
  });
  
  it("should not be able to authenticate an nonexistent user", () => {
    expect(async () => {
      await authenticateStudentUseCase.execute({
        email: "false@email.com",
        password: "if9sid",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be abçe to authenticate with incorrect password", () => {
    expect(async () => {
      const student: ICreateStudentsDTO = {
        email: "user@user.com",
        password: "fjiofwj",
        username: "username",
      };
      await createStudentUseCase.execute(student);

      await authenticateStudentUseCase.execute({
        email: student.email,
        password: "incorrentPass",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
