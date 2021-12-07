import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createTablePhases1638406652432 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'phases',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'map_id',
            type: 'uuid',
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'type',
            type: 'varchar',
            enum: ['theory', 'practice'],
          },
          {
            name: 'markdown_text',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'max_level',
            type: 'integer',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'FKMapPhase',
            referencedTableName: 'maps',
            referencedColumnNames: ['id'],
            columnNames: ['map_id'],
            onDelete: 'SET NULL',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('phases');
  }
}
