import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createTableOptions1639522424366 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'options',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'activity_id',
            type: 'uuid',
          },
          {
            name: 'type',
            type: 'varchar',
            enum: ['js_function', 'command'],
          },
          {
            name: 'hexadecimal_color',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'FKActivityOption',
            referencedTableName: 'activities',
            referencedColumnNames: ['id'],
            columnNames: ['activity_id'],
            onDelete: 'CASCADE',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('options');
  }
}
