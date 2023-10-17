import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
// eslint-disable-next-line import/no-cycle
import { Todo } from './Todo';

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column()
  activationLink: string;

  @Column({ default: '' })
  refreshToken: string;

  @Column({ default: false })
  isActivated: boolean;

  @OneToMany(() => Todo, (todo) => todo.user)
  todos: Todo[];
}
