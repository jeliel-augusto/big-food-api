import { MigrationInterface, QueryRunner } from "typeorm";

export class AdicionaRelacionamentoRestaurantePrato1654645227434 implements MigrationInterface {
    name = 'AdicionaRelacionamentoRestaurantePrato1654645227434'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`prato\` ADD \`restauranteId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`prato\` ADD CONSTRAINT \`FK_f58bb66d6dbf9daaa014809e54f\` FOREIGN KEY (\`restauranteId\`) REFERENCES \`restaurante\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`prato\` DROP FOREIGN KEY \`FK_f58bb66d6dbf9daaa014809e54f\``);
        await queryRunner.query(`ALTER TABLE \`prato\` DROP COLUMN \`restauranteId\``);
    }

}
