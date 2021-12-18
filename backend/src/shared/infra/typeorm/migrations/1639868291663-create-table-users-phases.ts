import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createTableUsersPhases1639868291663 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users_phases',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'user_id',
            type: 'uuid',
          },
          {
            name: 'phase_id',
            type: 'uuid',
          },
          {
            name: 'current_level',
            type: 'integer',
            default: 0,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'FKUserPhase',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['user_id'],
            onDelete: 'CASCADE',
          },
          {
            name: 'FKPhaseUser',
            referencedTableName: 'phases',
            referencedColumnNames: ['id'],
            columnNames: ['phase_id'],
            onDelete: 'CASCADE',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users_phases');
  }
}
