import { container } from 'tsyringe';
import { AnswersRepository } from '../../modules/questions/infra/typeorm/repositories/AnswersRepository';
import { CategoryRepository } from '../../modules/questions/infra/typeorm/repositories/CategoryRepository';
import { QuestionsRepository } from '../../modules/questions/infra/typeorm/repositories/QuestionsRepository';
import { IAnswerRepository } from '../../modules/questions/repositories/IAnswerRepository';
import { ICategoryRepository } from '../../modules/questions/repositories/ICategoryRepository';
import { IQuestionsRepository } from '../../modules/questions/repositories/IQuestionsRepository';
import { StudentsRepository } from '../../modules/user/infra/typeorm/repositories/StudentsRepository';
import { IStudentsRepository } from '../../modules/user/repositories/IStudentsRepository';

container.registerSingleton<IStudentsRepository>(
    "StudentsRepository",
    StudentsRepository
)

container.registerSingleton<IQuestionsRepository>(
    "QuestionsRepository", 
    QuestionsRepository
)

container.registerSingleton<IAnswerRepository>(
    "AnswersRepository",
    AnswersRepository
)

container.registerSingleton<ICategoryRepository>(
    "CategoryRepository",
    CategoryRepository
)