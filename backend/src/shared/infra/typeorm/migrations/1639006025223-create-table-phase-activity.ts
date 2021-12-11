import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createTablePhaseActivity1639006025223
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'phase_activity',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
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
            columnNames: ['activity_id'],
            onDelete: 'SET NULL',
          },
          {
            name: 'FKActivityPhase',
            referencedTableName: 'activities',
            referencedColumnNames: ['id'],
            columnNames: ['phase_id'],
            onDelete: 'SET NULL',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('phase_activity');
  }
}
