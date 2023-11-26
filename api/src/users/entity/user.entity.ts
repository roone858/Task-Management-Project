import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userId: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
