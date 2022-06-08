import { MigrationInterface, QueryRunner } from "typeorm";

export class AdicionaRelacionamentoIngredienteSecreto1654645464661 implements MigrationInterface {
    name = 'AdicionaRelacionamentoIngredienteSecreto1654645464661'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`ingrediente_secreto\` ADD \`pratoId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`ingrediente_secreto\` ADD UNIQUE INDEX \`IDX_714482180fd76b185191aa78bc\` (\`pratoId\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_714482180fd76b185191aa78bc\` ON \`ingrediente_secreto\` (\`pratoId\`)`);
        await queryRunner.query(`ALTER TABLE \`ingrediente_secreto\` ADD CONSTRAINT \`FK_714482180fd76b185191aa78bc5\` FOREIGN KEY (\`pratoId\`) REFERENCES \`prato\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`ingrediente_secreto\` DROP FOREIGN KEY \`FK_714482180fd76b185191aa78bc5\``);
        await queryRunner.query(`DROP INDEX \`REL_714482180fd76b185191aa78bc\` ON \`ingrediente_secreto\``);
        await queryRunner.query(`ALTER TABLE \`ingrediente_secreto\` DROP INDEX \`IDX_714482180fd76b185191aa78bc\``);
        await queryRunner.query(`ALTER TABLE \`ingrediente_secreto\` DROP COLUMN \`pratoId\``);
    }

}
