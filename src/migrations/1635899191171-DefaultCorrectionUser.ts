import { MigrationInterface, QueryRunner } from 'typeorm';

export class DefaultCorrectionUser1635899191171 implements MigrationInterface {
  name = 'DefaultCorrectionUser1635899191171';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "dataDeCadastro" SET DEFAULT now()`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "dataDeCadastro" SET DEFAULT '2021-11-03 00:24:59.676838'`,
    );
  }
}
