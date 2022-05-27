import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Prato {
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    nome!: string
}
