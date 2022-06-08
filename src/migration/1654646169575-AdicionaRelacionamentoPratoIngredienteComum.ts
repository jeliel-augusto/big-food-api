import { MigrationInterface, QueryRunner } from "typeorm";

export class AdicionaRelacionamentoPratoIngredienteComum1654646169575 implements MigrationInterface {
    name = 'AdicionaRelacionamentoPratoIngredienteComum1654646169575'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`prato_ingredientes_ingrediente_comum\` (\`pratoId\` int NOT NULL, \`ingredienteComumId\` int NOT NULL, INDEX \`IDX_513d2256fdcb89d759185cf36f\` (\`pratoId\`), INDEX \`IDX_69447c919e62a250fceebc853e\` (\`ingredienteComumId\`), PRIMARY KEY (\`pratoId\`, \`ingredienteComumId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`prato_ingredientes_ingrediente_comum\` ADD CONSTRAINT \`FK_513d2256fdcb89d759185cf36ff\` FOREIGN KEY (\`pratoId\`) REFERENCES \`prato\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`prato_ingredientes_ingrediente_comum\` ADD CONSTRAINT \`FK_69447c919e62a250fceebc853e8\` FOREIGN KEY (\`ingredienteComumId\`) REFERENCES \`ingrediente_comum\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`prato_ingredientes_ingrediente_comum\` DROP FOREIGN KEY \`FK_69447c919e62a250fceebc853e8\``);
        await queryRunner.query(`ALTER TABLE \`prato_ingredientes_ingrediente_comum\` DROP FOREIGN KEY \`FK_513d2256fdcb89d759185cf36ff\``);
        await queryRunner.query(`DROP INDEX \`IDX_69447c919e62a250fceebc853e\` ON \`prato_ingredientes_ingrediente_comum\``);
        await queryRunner.query(`DROP INDEX \`IDX_513d2256fdcb89d759185cf36f\` ON \`prato_ingredientes_ingrediente_comum\``);
        await queryRunner.query(`DROP TABLE \`prato_ingredientes_ingrediente_comum\``);
    }

}
