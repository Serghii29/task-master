import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
// eslint-disable-next-line import/no-cycle
import { User } from './User';

@Entity('todos')
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

  @ManyToOne(() => User, (user) => user.todos)
  user: User;
}
