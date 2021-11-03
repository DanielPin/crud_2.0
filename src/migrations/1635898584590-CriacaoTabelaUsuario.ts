import {MigrationInterface, QueryRunner} from "typeorm";

export class CriacaoTabelaUsuario1635898584590 implements MigrationInterface {
    name = 'CriacaoTabelaUsuario1635898584590'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "usuario" ("id" SERIAL NOT NULL, "Nome" character varying NOT NULL, "EMail" character varying NOT NULL, "Login" character varying NOT NULL, "Senha" character varying NOT NULL, "Role" integer NOT NULL, "dataDeCadastro" TIMESTAMP NOT NULL DEFAULT 'now()', CONSTRAINT "PK_a56c58e5cabaa04fb2c98d2d7e2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "cliente" ALTER COLUMN "dataDeCadastro" SET DEFAULT 'now()'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cliente" ALTER COLUMN "dataDeCadastro" SET DEFAULT '2021-10-30 23:08:52.257183'`);
        await queryRunner.query(`DROP TABLE "usuario"`);
    }

}
