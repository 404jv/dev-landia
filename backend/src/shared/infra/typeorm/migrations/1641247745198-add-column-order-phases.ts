import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class addColumnOrderPhases1641247745198 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'phases',
      new TableColumn({
        name: 'order',
        type: 'integer',
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('phases', 'order');
  }
}
