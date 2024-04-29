import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { Users } from 'src/users/user.entity';

export const userSeed: Users[] = [
  {
    name: 'admin',
    email: 'admin@gmail.com',
    phoneNumber: '091201920',
    password: '123',
    dob: new Date(1998, 0, 22),
  },
];

