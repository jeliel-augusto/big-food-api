import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm"
import { Prato } from "./Prato"

@Entity()
export class IngredienteComum {
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    nomeIngredienteComum!: string
    @ManyToMany(() => Prato, p => p.ingredientes)
    pratos!: Prato[]
}
/**
 * 1 - N One To Many (Um para muitos) relacionamento em que uma entidade possui muitas outras entidades e estas outras pertence a uma entidade
 * N - N Many To Many (Muitos para muitos) relacionamento em que N entidades podem estar em outras N entidades
 * 1 - 1 One To One é todo relacionamento em que uma entidade(linha) pertence a outra entidade(linha)
 * Um prato pode ter muitos ingredientes, e um ingrediente pode estar em muitos pratos. N - N
 */
/**
 * prato de id 1 -> ingredientes 2 e 3
 * prato de id 2 -> ingredientes 2 e 3
 * prato de id 3 -> ingredientes 2 e 4
 * ingrediente de id 2 -> prato 1, prato 2 e prato 3
 * ingrediente de id 3 -> prato 1 e prato 2
 * pratoId, ingredienteComumId
 * 1        2
 * 1        3
 * 2        2
 * 2        3
 * 3        2
 * 3        4
 */