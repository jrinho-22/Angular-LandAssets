import { HttpException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { Users } from 'src/users/user.entity';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) { }

  async signIn(
    email: string,
    pass: string,
  ): Promise<{ access_token: string, user: Users }> {
    const user = await this.usersService.findByEmail(email);
    if (user?.password !== pass) {
      throw new NotFoundException('User not found');
    }
    const payload = { userId: user.userId, username: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
      user: user
    };
  }

  async signUp(signUpDto: CreateUserDto): Promise<{ access_token: string, user: Users }> {
    try {
      const user = await this.usersService.create(signUpDto);
      const payload = { userId: user.userId, username: user.email };
      return {
        access_token: await this.jwtService.signAsync(payload),
        user: user
      };
    } catch (error) {
      if (error instanceof HttpException) {  
        throw error;
      }
    }
  }
}
