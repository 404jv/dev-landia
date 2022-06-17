import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class addColumnColorActivities1655495662458
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'activities',
      new TableColumn({
        name: 'hexadecimal_color',
        type: 'varchar',
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('activities', 'hexadecimal_color');
  }
}
