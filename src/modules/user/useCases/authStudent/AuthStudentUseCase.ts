import { inject, injectable } from "tsyringe";
import { IStudentsRepository } from "../../repositories/IStudentsRepository";
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { AppError } from "../../../../shared/errors/AppError";

interface IRequest {
    email: string,
    password: string;
}

interface IResponse {
    student: {
        id: string,
        username: string,
        email: string
    },
    token: string;
}

@injectable()
class AuthStudentUseCase {
    constructor(
        @inject("StudentsRepository")
        private studentsRepository: IStudentsRepository
    ) {}


    async execute({email, password}: IRequest): Promise<IResponse> {
    // verifica de usuario existe
        const student = await this.studentsRepository.findByEmail(email)

        if(!student) {
            throw new AppError("Email or password incorrect");
        }
        const passwordMatch = await compare(password, student.password)

        if(!passwordMatch) {
            throw new AppError("Email or password incorrect");
        }

        const token = sign({}, "de7e21dfbacf0633d8da91beb9ce95f8", {
            subject: student.id,
            expiresIn: "1d",
        });

        const tokenReturn: IResponse = {
            token,
            student: {
                id: student.id,
                username: student.username,
                email: student.email,
            }
        }

        return tokenReturn;

    }
}

export { AuthStudentUseCase };