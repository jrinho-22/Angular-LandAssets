import { Injectable } from '@nestjs/common';
import { CreateEstateDto } from './dto/create-estate.dto';
import { UpdateEstateDto } from './dto/update-estate.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Estate } from "./estate.entity"

@Injectable()
export class EstateService {
  constructor(
    @InjectRepository(Estate)
    private estateRepository: Repository<Estate>,
  ) {}

  createSeed(estateSeed: CreateEstateDto[]): Array<Promise<Estate>> {
    return estateSeed.map(async (estate: CreateEstateDto) => {
      return await this.estateRepository
        .findOne({
          where: {
            name: estate.name,
          },
        })
        .then(async (dbLangauge) => {
          if (dbLangauge) {
            return Promise.resolve(null);
          }
          return Promise.resolve(
            await this.estateRepository.save(estate),
          );
        })
        .catch((error) => Promise.reject(error));
    });
  }

  create(createEstateDto: CreateEstateDto) {
    return 'This action adds a new estate';
  }

  findAll() {
    return `This action returns all estate`;
  }

  findOne(id: number) {
    return `This action returns a #${id} estate`;
  }

  update(id: number, updateEstateDto: UpdateEstateDto) {
    return `This action updates a #${id} estate`;
  }

  remove(id: number) {
    return `This action removes a #${id} estate`;
  }
}
