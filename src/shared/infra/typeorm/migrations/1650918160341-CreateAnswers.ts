import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAnswers1650918160341 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "answers",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "content",
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
            isNullable: true,
          },
          {
            name: "isGolden",
            type: "boolean",
            default: false,
          },
          {
            name: "author_id",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "question_id",
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
            name: "FKAuthorAnswer",
            referencedTableName: "student",
            referencedColumnNames: ["id"],
            columnNames: ["author_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
          {
            name: "FKQuestionId",
            referencedTableName: "questions",
            referencedColumnNames: ["id"],
            columnNames: ["question_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("answers")
  }
}
