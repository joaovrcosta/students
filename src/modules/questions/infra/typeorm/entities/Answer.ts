import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Student } from "../../../../user/infra/typeorm/entities/Student";
import { Question } from "./Question";

@Entity("answers")
class Answer {
  @PrimaryColumn()
  id?: string;

  @Column()
  content: string;

  @Column()
  rate: number;

  @Column()
  stars: number;

  @Column()
  isGolden: boolean;

  @ManyToOne(() => Student)
  @JoinColumn({name: "author_id"})
  student: Student;

  @ManyToOne(() => Question)
  @JoinColumn({name: "question_id"})
  question: Question;

  @Column()
  author_id: string;

  @Column()
  question_id: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
      this.isGolden = false;
    }
  }
}

export { Answer };