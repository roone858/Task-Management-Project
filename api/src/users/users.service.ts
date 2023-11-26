import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
  findOne(username: string): Promise<User> {
    return this.userRepository.findOneBy({ username });
  }

  create(createUserDto: CreateUserDto): Promise<User> {
    const user: User = new User();
    user.userId = createUserDto.userId;
    user.email = createUserDto.email;
    user.username = createUserDto.username;
    user.password = createUserDto.password;
    return this.userRepository.save(user);
  }

  async update(username: string, updateUserDto: UpdateUserDto) {
    const user: User = await this.userRepository.findOneBy({ username });
    user.userId = updateUserDto.userId;
    user.email = updateUserDto.email;
    user.username = updateUserDto.username;
    user.password = updateUserDto.password;
    return this.userRepository.update({ username }, updateUserDto);
  }

  async delete(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}
