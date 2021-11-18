import { MigrationInterface, QueryRunner } from 'typeorm';

export class ClientDefaultCorrection1635899094171
  implements MigrationInterface
{
  name = 'ClientDefaultCorrection1635899094171';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "customer" ALTER COLUMN "dataDeCadastro" SET DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "dataDeCadastro" SET DEFAULT 'now()'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "dataDeCadastro" SET DEFAULT '2021-11-03 00:22:57.246793'`,
    );
    await queryRunner.query(
      `ALTER TABLE "customer" ALTER COLUMN "dataDeCadastro" SET DEFAULT '2021-11-03 00:22:57.246793'`,
    );
  }
}
