import {MigrationInterface, QueryRunner} from "typeorm";

export class AtualizacaoData1633310474165 implements MigrationInterface {
    name = 'AtualizacaoData1633310474165'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customer" ALTER COLUMN "dataDeCadastro" SET DEFAULT 'now()'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customer" ALTER COLUMN "dataDeCadastro" DROP DEFAULT`);
    }

}
