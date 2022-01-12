import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class addColumnOrderActivities1642029559208
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'activities',
      new TableColumn({
        name: 'order',
        type: 'integer',
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('activities', 'order');
  }
}
