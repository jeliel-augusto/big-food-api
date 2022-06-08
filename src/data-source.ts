import "reflect-metadata"
import { DataSource } from "typeorm"
import { config } from 'dotenv'
import { Prato } from "./entity/Prato"
import { Restaurante } from "./entity/Restaurante"
import { IngredienteComum } from "./entity/IngredienteComum"
import { IngredienteSecreto } from "./entity/IngredienteSecreto"
config()
// +'123' -> 123
// + 'abc' -> NaN
export const AppDataSource = new DataSource({
    type: process.env.TYPEORM_CONNECTION as 'mysql',
    host: process.env.TYPEORM_HOST,
    port: +(process.env.TYPEORM_PORT as string),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    synchronize: process.env.TYPEORM_SYNCHRONIZE === 'true',
    logging: process.env.TYPEORM_LOGGING === 'true',
    entities: [Prato, Restaurante, IngredienteComum, IngredienteSecreto],
    migrations: ['src/migration/*.ts'],
    subscribers: [],
})
