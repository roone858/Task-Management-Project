import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  taskId: string;

  @Column()
  userId: string;

  @Column({ length: 255, nullable: false })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'date', nullable: true })
  dueDate: Date;

  @Column({ default: false })
  isCompleted: boolean;
}
