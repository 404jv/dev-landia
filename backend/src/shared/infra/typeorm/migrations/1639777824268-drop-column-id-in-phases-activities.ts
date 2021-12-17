import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class dropColumnIdInPhasesActivities1639777824268
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('phases_activities', 'id');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'phases_activities',
      new TableColumn({
        name: 'id',
        type: 'uuid',
        isPrimary: true,
      })
    );
  }
}
