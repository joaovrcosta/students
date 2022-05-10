import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Student } from '../../../../user/infra/typeorm/entities/Student'
import { Category } from "./Category";
@Entity("questions")
class Question {
  @PrimaryColumn()
  id: string;
  
  @Column()
  title: string;

  @Column()
  content: string;

  
  @ManyToOne(() => Category)
  @JoinColumn({name: "category_id"})
  category: Student
  
  @ManyToOne(() => Student)
  @JoinColumn({name: "author_id"})
  student: Student

  @Column()
  category_id: string;

  @Column()
  author_id: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Question };
