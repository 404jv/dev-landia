import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class addColumnAbstractedName1656192232357
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'options',
      new TableColumn({
        name: 'abstracted_name',
        type: 'varchar',
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('options', 'abstracted_name');
  }
}
