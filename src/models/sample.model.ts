import { PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Entity } from 'typeorm'

@Entity()
export class SampleModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  description: string;

  @CreateDateColumn()
  readonly createdTime: number;

  @UpdateDateColumn()
  readonly updatedTime: number;
}