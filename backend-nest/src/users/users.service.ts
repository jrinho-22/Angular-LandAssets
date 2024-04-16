import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { usersSeed } from './data';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './entities/user.entity';
import { IUser } from './IUser';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  createBefore(): Array<Promise<Users>> {
    return usersSeed.map(async (user: IUser) => {
      return await this.usersRepository
        .findOne({
          where: {
            name: user.name,
          },
        })
        .then(async (dbLangauge) => {
          // We check if a user already exists.
          // If it does don't create a new one.
          if (dbLangauge) {
            return Promise.resolve(null);
          }
          return Promise.resolve(
            // or create(user).then(() => { ... });
            await this.usersRepository.save(user),
          );
        })
        .catch((error) => Promise.reject(error));
    });
  }

  create(createUserDto: CreateUserDto) {
    console.log(createUserDto);
    this.usersRepository.save(createUserDto);
  }

  findAll(): any {
    return this.usersRepository.find();
  }

  findOne(userId: number): Promise<Users | null> {
    return this.usersRepository.findOne({
      where: {
        name: 'luiz',
      },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
