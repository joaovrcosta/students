import { v4 as uuidV4 } from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("student")
class Student {
  
  @PrimaryColumn()
  id?: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  stars: number;

  @Column()
  isMod: boolean;

  @Column()
  email: string;

  @Column()
  level: number;

  @CreateDateColumn()
  created_at: Date;

  @Column()
  avatar: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Student };
