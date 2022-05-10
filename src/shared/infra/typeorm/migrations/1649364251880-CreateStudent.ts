import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateStudent1649364251880 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "student",
              columns: [
                {
                  name: "id",
                  type: "uuid",
                  isPrimary: true,
                },
                {
                  name: "username",
                  type: "varchar",
                  isUnique: true
                },
                {
                  name: "password",
                  type: "varchar"
                },
                {
                  name: "stars",
                  type: "numeric",
                  default: 0
                },
                {
                  name: "isMod",
                  type: "boolean",
                  default: false
                },
                {
                  name: "email",
                  type: "varchar",
                },
                {
                  name: "level",
                  type: "numeric",
                  default: 0
                },
                {
                  name: "created_at",
                  type: "timestamp",
                  default: "now()"
                }
              ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("student");
    }

}
