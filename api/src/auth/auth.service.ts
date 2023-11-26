import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}
  async signIn(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    console.log(user);
    if (user?.password !== password) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.userId, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload, {
        expiresIn: '1d', // expires in 1 days
      }),
      userId: user.userId,
      username: user.username,
    };
  }
}
