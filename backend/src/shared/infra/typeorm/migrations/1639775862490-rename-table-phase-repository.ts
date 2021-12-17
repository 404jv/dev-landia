import { MigrationInterface, QueryRunner } from 'typeorm';

export class renameTablePhaseRepository1639775862490
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameTable('phase_activity', 'phases_activities');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameTable('phases_activities', 'phase_activity');
  }
}
