import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Prato } from "./Prato";

@Entity()
export class IngredienteSecreto {
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    nomeIngrediente!: string
    @Column()
    pratoId!: number
    @OneToOne(() => Prato)
    @JoinColumn()
    prato!: Prato
}
/**
 * 1 - N One To Many
 * N - N Many To Many
 * 1 - 1 One To One é todo relacionamento em que uma entidade(linha) pertence a outra entidade(linha)
 * Cada IngredienteSecreto pertence unicamente a um prato
 * 1 - 1
 * pratoId nao pode se repetir
 * ingredientesecreto <-> prato
 * id, nome, pratoId
 * 1   elemento x   2
 * 1   elemento x2  2
 */