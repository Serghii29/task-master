import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, unique: true })
  title: string;

  @Column()
  description: string;

  @Column()
  isPublic: boolean;

  @Column({ default: false })
  completed: boolean;
}
