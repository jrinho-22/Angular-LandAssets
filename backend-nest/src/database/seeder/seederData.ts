import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { CreateEstateDto } from 'src/estate/dto/create-estate.dto';

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
  {
    name: 'New York',
    map: 'src/assets/imgs/estateMap.png',
    size: '54,554',
    oceanDistance: '50km',
    plotsAvailable: 0,
    population: '19,453,561',
    counties: 62,
    paymentTerm: 'Bi-annual Payments',
    averagePricePerSQM: '16',
    averagePartialPaymentPrice: '8000',
  },
  {
    name: "California",
    map: "src/assets/imgs/estateMap.png",
    size: "163,696",
    oceanDistance: "12km",
    plotsAvailable: 0,
    population: "39,512,223",
    counties: 58,
    paymentTerm: "Flexible",
    averagePricePerSQM: "15",
    averagePartialPaymentPrice: "7500",
  },
  {
    name: "Texas",
    map: "src/assets/imgs/estateMap.png",
    size: "268,596",
    oceanDistance: "55km",
    plotsAvailable: 0,
    population: "28,995,881",
    counties: 254,
    paymentTerm: "Monthly Installments",
    averagePricePerSQM: "12",
    averagePartialPaymentPrice: "6000",
  },
];
