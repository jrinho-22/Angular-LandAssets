import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { CreateEstateDto } from 'src/estate/dto/create-estate.dto';
import * as fs from 'fs';

const imageData = fs.readFileSync('src/estate/imgs/estateMap.png');
console.log(imageData, 'imageData')
export const usersSeed: CreateUserDto[] = [
  {
    name: 'admin',
    email: 'admin@gmail.com',
    phoneNumber: '091201920',
    password: '123',
    dob: new Date(1998, 0, 22),
  },
];

export const estateSeed: CreateEstateDto[] = [
  { name: 'New York', map: imageData },
];
