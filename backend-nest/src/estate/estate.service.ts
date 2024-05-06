import { Injectable } from '@nestjs/common';
import { CreateEstateDto } from './dto/create-estate.dto';
import { UpdateEstateDto } from './dto/update-estate.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Estate } from './estate.entity';
import * as fs from 'fs';
import { Response } from 'express';
import * as path from 'node:path';

@Injectable()
export class EstateService {
  constructor(
    @InjectRepository(Estate)
    private estateRepository: Repository<Estate>,
  ) {}

  createSeed(estateSeed: Estate[]): Array<Promise<Estate>> {
    return estateSeed.map(async (estate: Estate) => {
      return await this.estateRepository
        .findOne({
          where: {
            name: estate.name,
          },
        })
        .then(async (dbEstate) => {
          if (dbEstate) {
            return Promise.resolve(null);
          }
          return Promise.resolve(await this.estateRepository.save(estate));
        })
        .catch((error) => Promise.reject(error));
    });
  }

  async create(createEstateDto: CreateEstateDto, file: Express.Multer.File) {
    const pathSufix = path.join('src/assets/imgs', createEstateDto.img);
    const assetsDir = path.join(process.cwd(), pathSufix);
    fs.writeFile(assetsDir, file.buffer, (err) => {
      if (err) {
        console.error('Error saving file:', err);
      } else {
        const state = {
          ...createEstateDto,
          plotsAvailable: Number(createEstateDto.plotsAvailable),
          counties: Number(createEstateDto.counties),
          map: pathSufix,
        };
        return Promise.resolve(this.estateRepository.save(state));
      }
    });
  }

  async findAll(): Promise<Estate[]> {
    return this.estateRepository.find().then((v) => {
      return Promise.all(
        v.map((v) => {
          const chunks: any[] = [];
          const imgPath = v.map;
          const readStream = fs.createReadStream(imgPath);

          return new Promise<Estate>((resolve, reject) => {
            readStream.on('data', (chunk) => {
              chunks.push(chunk);
            });

            readStream.on('end', () => {
              const imageData = Buffer.concat(chunks);
              const base64Image = imageData.toString('base64');
              resolve({ ...v, map: base64Image });
            });

            readStream.on('error', (error) => {
              reject(error);
            });
          });
        }),
      );
    });
  }

  findOne(estateId: number): Promise<Estate | null> {
    return this.estateRepository.findOne({
      where: {
        estateId: estateId,
      },
    });
  }

  update(id: number, updateEstateDto: UpdateEstateDto) {
    return `This action updates a #${id} estate`;
  }

  remove(id: number) {
    return `This action removes a #${id} estate`;
  }
}
