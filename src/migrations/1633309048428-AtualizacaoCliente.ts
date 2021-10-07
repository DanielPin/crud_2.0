import {MigrationInterface, QueryRunner} from "typeorm";

export class AtualizacaoCliente1633309048428 implements MigrationInterface {
    name = 'AtualizacaoCliente1633309048428'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cliente" ADD "sobrenome" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cliente" ADD "rg" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cliente" ADD "cpf" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cliente" ADD "telefone" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cliente" ADD "celular" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cliente" ADD "rua" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cliente" ADD "bairro" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cliente" ADD "cidade" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cliente" ADD "estado" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cliente" ADD "dataDeCadastro" TIMESTAMP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "dataDeCadastro"`);
        await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "estado"`);
        await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "cidade"`);
        await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "bairro"`);
        await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "rua"`);
        await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "celular"`);
        await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "telefone"`);
        await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "cpf"`);
        await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "rg"`);
        await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "sobrenome"`);
    }

}
