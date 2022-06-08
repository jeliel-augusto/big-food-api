import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Prato } from "./Prato";

@Entity()
export class Restaurante {
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    nomeRestaurante!: string
    @OneToMany(() => Prato, p => p.restaurante)
    pratos!: Prato[]
    
}
/**
 * 1 - N One To Many (Um para muitos) relacionamento em que uma entidade possui muitas outras entidades e estas outras pertence a uma entidade
 * N - N Many To Many
 * 1 - 1 One To One é todo relacionamento em que uma entidade(linha) pertence a outra entidade(linha)
 * Um restaurante possui muitos pratos exclusivos, e cada prato pertence exclusivamente a um restaurante
 * Um restaurante tem muitos pratos, e um prato está em um restaurante. 1 - N
*/