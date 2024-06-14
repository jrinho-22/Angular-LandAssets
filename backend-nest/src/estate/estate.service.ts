import { Injectable } from '@nestjs/common';
import { CreateEstateDto } from './dto/create-estate.dto';
import { UpdateEstateDto } from './dto/update-estate.dto';
import { Repository, UpdateResult } from 'typeorm';
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

  async create(
    createEstateDto: CreateEstateDto,
    file: Express.Multer.File,
  ): Promise<Estate> {
    const pathSufix = path.join('src/assets/imgs', createEstateDto.img);
    const assetsDir = path.join(process.cwd(), pathSufix);
    try {
      await fs.promises.writeFile(assetsDir, file.buffer);

      const estate = {
        ...createEstateDto,
        plotsAvailable: Number(createEstateDto.plotsAvailable),
        counties: Number(createEstateDto.counties),
        map: pathSufix,
      };

      return await this.estateRepository.save(estate);
    } catch (err) {
      console.error('Error:', err);
      throw new Error('Error creatig estate');
    }
  }

  async updateOne(
    id: number,
    createEstateDto: CreateEstateDto,
    file: Express.Multer.File,
  ): Promise<UpdateResult> {
    await this.estateRepository
      .findOne({
        where: {
          estateId: id,
        },
      })
      .then((estate: Estate) => {
        const filePath = estate.map;

        fs.unlink(filePath, (err) => {
          if (err) {
            console.error('Error deleting the file:', err);
          }
        });
      });
    const pathSufix = path.join('src/assets/imgs', createEstateDto.img);
    const assetsDir = path.join(process.cwd(), pathSufix);
    try {
      await fs.promises.writeFile(assetsDir, file.buffer);

      const estate = this.estateRepository.create({
        ...createEstateDto,
        plotsAvailable: Number(createEstateDto.plotsAvailable),
        counties: Number(createEstateDto.counties),
        map: pathSufix,
      });

      return await this.estateRepository.update(id, estate);
    } catch (err) {
      console.error('Error:', err);
      throw new Error('Error creating estate');
    }
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

  async findOne(
    estateId: number,
  ): Promise<(Estate & { imgName: string }) | null> {
    return this.estateRepository
      .findOne({
        where: {
          estateId: estateId,
        },
      })
      .then((state: Estate) => {
        const readStream = fs.createReadStream(state.map);
        const chunks: any[] = [];
        return new Promise<Estate & { imgName: string }>((resolve, reject) => {
          readStream.on('data', (chunk) => {
            chunks.push(chunk);
          });

          readStream.on('end', () => {
            const imageData = Buffer.concat(chunks);
            const base64Image = imageData.toString('base64');
            const imgName = state.map.split('\\');
            resolve({
              ...state,
              imgName: imgName[imgName.length - 1],
              map: base64Image,
            });
          });

          readStream.on('error', (error) => {
            reject(error);
          });
        });
      });
  }

  update(id: number, updateEstateDto: UpdateEstateDto) {
    return `This action updates a #${id} estate`;
  }

  remove(id: number) {
    return `This action removes a #${id} estate`;
  }
}
