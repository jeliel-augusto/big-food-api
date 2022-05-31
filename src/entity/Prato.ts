import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm"

@Entity()
export class Prato {
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    nome!: string
    @CreateDateColumn()
    criadoEm!: Date
}
