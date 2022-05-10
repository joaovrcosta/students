import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AlterQuestionsAddCategoryID1651183318102 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("questions", 
        new TableColumn({
            name: "category_id",
            type: "uuid",
            isNullable: false
        }))

        await queryRunner.createForeignKey(
            'questions',
            new TableForeignKey({
              columnNames: ['category_id'],
              referencedTableName: 'categories',
              referencedColumnNames: ['id']
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("questions","category_id");
    }

}
