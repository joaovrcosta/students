import { inject, injectable } from "tsyringe";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";


interface IRequest {
  title: string;
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoryRepository")
    private categoriesRepository: ICategoryRepository
  ) {}

  async execute({ 
      title 
}: IRequest): Promise<void> {
    await this.categoriesRepository.create({
        title,
    });
  }
}

export { CreateCategoryUseCase };