import { getRepository, Repository } from "typeorm";
import { ICreateStudentsDTO } from "../../../dtos/ICreateStudentsDTO";
import { IStudentsRepository } from "../../../repositories/IStudentsRepository";
import { Student } from "../entities/Student";

class StudentsRepository implements IStudentsRepository {
  private repository: Repository<Student>;

  constructor() {
    this.repository = getRepository(Student);
  }

  async create({
    username,
    email,
    password,
    avatar,
    id,
  }: ICreateStudentsDTO): Promise<void> {
    const student = this.repository.create({
      username,
      email,
      password,
      avatar,
      id,
    });

    await this.repository.save(student);
  }
  async findByEmail(email: string): Promise<Student> {
    const student = await this.repository.findOne({ email });
    return student;
  }

  async findByUsername(username: string): Promise<Student> {
    const student = await this.repository.findOne({ username });
    return student;
  }

  async findById(id: string): Promise<Student> {
    const student = await this.repository.findOne(id);
    return student;
  }

  async list(username?: string, email?: string): Promise<Student[]> {
    const studentsQuery = await this.repository.createQueryBuilder("s");
    
    if (username) {
      studentsQuery.andWhere("s.username = :username", {username})
    }

    if (email) {
      studentsQuery.andWhere("s.email = :email", {email})
    }

    const students = await studentsQuery.getMany();

    return students;
  }
}

export { StudentsRepository };
