import { MigrationInterface, QueryRunner } from "typeorm";

export class AdicionaCriadoEmNaTabelaPrato1654034274679 implements MigrationInterface {
    name = 'AdicionaCriadoEmNaTabelaPrato1654034274679'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`prato\` ADD \`criadoEm\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`prato\` DROP COLUMN \`criadoEm\``);
    }

}
