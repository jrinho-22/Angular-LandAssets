import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { Users } from 'src/users/user.entity';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    email: string,
    pass: string,
  ): Promise<{ access_token: string, user: Users }> {
    const user = await this.usersService.findByEmail(email);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { userId: user.userId, username: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
      user: user
    };
  }

  async signUp(signUpDto: CreateUserDto): Promise<{ access_token: string, user: Users }> {
    const user = await this.usersService.create(signUpDto);

    const payload = { userId: user.userId, username: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
      user: user
    };
  }
}
