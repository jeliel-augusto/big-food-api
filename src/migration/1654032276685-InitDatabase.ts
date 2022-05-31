import { MigrationInterface, QueryRunner } from "typeorm";

export class InitDatabase1654032276685 implements MigrationInterface {
    name = 'InitDatabase1654032276685'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`prato\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`prato\``);
    }

}
