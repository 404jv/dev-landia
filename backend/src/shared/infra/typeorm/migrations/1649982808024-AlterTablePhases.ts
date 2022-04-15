import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AlterTablePhases1649982808024 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'phases',
      new TableColumn({
        name: 'description',
        type: 'varchar',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('phases', 'description');
  }
}
