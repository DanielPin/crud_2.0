import {MigrationInterface, QueryRunner} from "typeorm";

export class AtualizacaoCliente1633309048428 implements MigrationInterface {
    name = 'AtualizacaoCliente1633309048428'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customer" ADD "sobrenome" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customer" ADD "rg" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customer" ADD "cpf" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customer" ADD "telefone" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customer" ADD "celular" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customer" ADD "rua" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customer" ADD "bairro" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customer" ADD "cidade" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customer" ADD "estado" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customer" ADD "dataDeCadastro" TIMESTAMP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "dataDeCadastro"`);
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "estado"`);
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "cidade"`);
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "bairro"`);
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "rua"`);
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "celular"`);
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "telefone"`);
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "cpf"`);
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "rg"`);
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "sobrenome"`);
    }

}
