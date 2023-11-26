import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entity/task.entity';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @UseGuards(AuthGuard)
  @Get()
  findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }
  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Task> {
    console.log(id);
    return this.tasksService.findOne(id);
  }
  @UseGuards(AuthGuard)
  @Get('user/:userId')
  findAllForUser(@Param('userId') userId: string): Promise<Task[]> {
    return this.tasksService.findAllForUser(userId);
  }
  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }
  @UseGuards(AuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateTaskDto) {
    return this.tasksService.update(id, updateCatDto);
  }
  @UseGuards(AuthGuard)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.tasksService.delete(id);
  }
}
