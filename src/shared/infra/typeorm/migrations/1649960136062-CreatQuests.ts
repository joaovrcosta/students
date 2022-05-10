import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatQuests1649960136062 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "questions",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "title",
            type: "varchar",
          },
          {
            name: "contents",
            type: "varchar",
          },
          {
            name: "category",
            type: "varchar",
          },
          {
            name: "rate",
            type: "numeric",
            isNullable: true
          },
          {
            name: "stars",
            type: "numeric",
            isNullable: true
          },
          {
            name: "student_id",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKStudentId",
            referencedTableName: "student",
            referencedColumnNames: ["id"],
            columnNames: ["student_id"],
            onDelete: "SET NULL", //deve-se alterar futuramente para que quando um usuario não existir mais a pergunta dele permaneça
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("questions");
  }
}
