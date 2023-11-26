import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entity/user.entity';
import { Task } from './tasks/entity/task.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: '1234',
      username: 'postgres',
      entities: [User, Task],
      database: 'tasks',
      synchronize: true,
      logging: true,
    }),
    TasksModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [
    AppController,
    TasksController,
    UsersController,
    AuthController,
  ],
  providers: [AppService, TasksService, UsersService, AuthService],
})
export class AppModule {}
