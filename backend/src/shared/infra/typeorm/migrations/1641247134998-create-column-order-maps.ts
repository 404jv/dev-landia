import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class createColumnOrderMaps1641247134998 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'maps',
      new TableColumn({
        name: 'order',
        type: 'integer',
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('maps', 'order');
  }
}
