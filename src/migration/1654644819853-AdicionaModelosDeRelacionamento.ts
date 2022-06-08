import { MigrationInterface, QueryRunner } from "typeorm";

export class AdicionaModelosDeRelacionamento1654644819853 implements MigrationInterface {
    name = 'AdicionaModelosDeRelacionamento1654644819853'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`restaurante\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nomeRestaurante\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`ingrediente_comum\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nomeIngredienteComum\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`ingrediente_secreto\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nomeIngrediente\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`ingrediente_secreto\``);
        await queryRunner.query(`DROP TABLE \`ingrediente_comum\``);
        await queryRunner.query(`DROP TABLE \`restaurante\``);
    }

}
