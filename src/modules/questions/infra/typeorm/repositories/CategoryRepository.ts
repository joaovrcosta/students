import { getRepository, Repository } from "typeorm";
import { ICategoryRepository } from "../../../repositories/ICategoryRepository";
import { Category } from "../entities/Category";

class CategoryRepository implements ICategoryRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async create({title}): Promise<Category> {
    const category = this.repository.create({
      title,
    });

    await this.repository.save(category);

    return category
  }
}

export { CategoryRepository };
