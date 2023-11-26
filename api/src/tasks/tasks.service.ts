import { Injectable } from '@nestjs/common';
import { UpdateTaskDto } from './dto/update-task.dto';
import { CreateTaskDto } from './dto/create-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entity/task.entity';
@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }
  findOne(taskId: string): Promise<Task> {
    return this.taskRepository.findOneBy({ taskId });
  }

  findAllForUser(userId: string): Promise<Task[]> {
    return this.taskRepository.findBy({ userId });
  }
  create(createTaskDto: CreateTaskDto): Promise<Task> {
    const task: Task = new Task();
    task.taskId = createTaskDto.taskId;
    task.userId = createTaskDto.userId;
    task.name = createTaskDto.name;
    task.description = createTaskDto.description;
    task.dueDate = new Date(createTaskDto.dueDate);
    task.isCompleted = createTaskDto.isCompleted;
    return this.taskRepository.save(task);
  }

  async update(taskId: string, updateTaskDto: UpdateTaskDto) {
    const task: Task = await this.taskRepository.findOneBy({ taskId });
    task.taskId = updateTaskDto.taskId;
    task.name = updateTaskDto.name;
    task.description = updateTaskDto.description;
    task.dueDate = new Date(updateTaskDto.dueDate);
    task.isCompleted = updateTaskDto.isCompleted;
    return this.taskRepository.update({ taskId }, updateTaskDto);
  }

  async delete(id: string): Promise<void> {
    await this.taskRepository.delete(id);
  }
}
