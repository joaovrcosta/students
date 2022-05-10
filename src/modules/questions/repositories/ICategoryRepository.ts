import { Category } from "../infra/typeorm/entities/Category"

interface ICreateCategoryDTO {
    title: string;
  }


interface ICategoryRepository {
   
    create({title: string}: ICreateCategoryDTO): Promise<Category>
}

export { ICategoryRepository }