import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createTableDefaultCode1642888359282 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'activity_default_code',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'activity_id',
            type: 'uuid',
          },
          {
            name: 'option_id',
            type: 'uuid',
          },
          {
            name: 'order',
            type: 'integer',
          },
        ],
        foreignKeys: [
          {
            name: 'FKActivityOption',
            referencedColumnNames: ['id'],
            referencedTableName: 'activities',
            columnNames: ['activity_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'FKOptionActivity',
            referencedColumnNames: ['id'],
            referencedTableName: 'options',
            columnNames: ['option_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('activity_default_code');
  }
}
