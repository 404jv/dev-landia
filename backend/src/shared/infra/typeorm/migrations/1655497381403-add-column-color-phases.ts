import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class addColumnColorPhases1655497381403 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'phases',
      new TableColumn({
        name: 'hexadecimal_color',
        type: 'varchar',
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('phases', 'hexadecimal_color');
  }
}
