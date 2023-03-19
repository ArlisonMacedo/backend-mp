import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class AmbientPad {
  @PrimaryGeneratedColumn()
  id: number

  @Column("text")
  name: string

  @Column("text")
  link: string
}
