import { ICreateStudentsDTO } from "../../dtos/ICreateStudentsDTO";
import { Student } from "../../infra/typeorm/entities/Student";
import { IStudentsRepository } from "../IStudentsRepository";


class StudentRepositoryInMemory implements IStudentsRepository {
    students: Student[] = [];

    async create({
        username, 
        email, 
        password,
    }: ICreateStudentsDTO): Promise<void> {
        const student = new Student();

        Object.assign(student, {
            username, 
            email, 
            password,
        });

        this.students.push(student);
    }

    async findByEmail(email: string): Promise<Student> {
        return this.students.find((student) => student.email === email)
    };

    async findById(id: string): Promise<Student> {
        return this.students.find((student) => student.id === id);
    }
}

export { StudentRepositoryInMemory }