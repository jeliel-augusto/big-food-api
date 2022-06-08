import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable } from "typeorm"
import { IngredienteComum } from "./IngredienteComum"
import { Restaurante } from "./Restaurante"

@Entity()
export class Prato {
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    nome!: string
    @CreateDateColumn()
    criadoEm!: Date
    @Column()
    restauranteId!: number
    @ManyToOne(() => Restaurante, r => r.pratos)
    @JoinColumn()
    restaurante!: Restaurante
    @ManyToMany(() => IngredienteComum, ic => ic.pratos, { cascade: ['insert', 'update'] })
    @JoinTable()
    ingredientes!: IngredienteComum[]
}
