import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterStudentAddAvatar1649546922868 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("student", 
        new TableColumn({
            name: "avatar",
            type: "varchar",
            isNullable: true
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("student", "avatar");
    }

}
