import { ICreateAnswerDTO } from "../dtos/ICreateAnswerDTO"

interface IAnswerRepository {
    create(data: ICreateAnswerDTO): Promise<void>
}

export { IAnswerRepository }