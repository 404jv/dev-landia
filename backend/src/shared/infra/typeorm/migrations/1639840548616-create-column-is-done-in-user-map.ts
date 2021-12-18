import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class createColumnIsDoneInUserMap1639840548616
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'user_map',
      new TableColumn({
        name: 'is_done',
        type: 'boolean',
        default: false,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('user_map', 'is_done');
  }
}
