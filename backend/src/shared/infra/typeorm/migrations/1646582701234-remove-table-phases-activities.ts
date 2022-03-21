import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class removeTablePhasesActivities1646582701234
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('phases_activities');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'phases_activities',
        columns: [
          {
            name: 'phase_id',
            type: 'uuid',
          },
          {
            name: 'activity_id',
            type: 'uuid',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'FKPhaseActivity',
            referencedTableName: 'phases',
            referencedColumnNames: ['id'],
            columnNames: ['phase_id'],
            onDelete: 'SET NULL',
          },
          {
            name: 'FKActivityPhase',
            referencedTableName: 'activities',
            referencedColumnNames: ['id'],
            columnNames: ['activity_id'],
            onDelete: 'SET NULL',
          },
        ],
      })
    );
  }
}
