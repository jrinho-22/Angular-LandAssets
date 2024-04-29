import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Estate } from 'src/estate/estate.entity';
import { Repository } from 'typeorm';
import { CreatePlotDto } from './dto/create-plot.dto';
import { UpdatePlotDto } from './dto/update-plot.dto';
import { Plot } from './plot.entity';

@Injectable()
export class PlotService {
  constructor(
    @InjectRepository(Plot)
    private plotRepository: Repository<Plot>,
    @InjectRepository(Estate)
    private EstateRepository: Repository<Estate>,
  ) {}

  async create(plot: CreatePlotDto): Promise<Plot> {
    return await this.plotRepository
      .findOne({
        where: {
          estate: { estateId: plot.estateId },
          number: plot.number,
        },
      })
      .then(async (dbPlot) => {
        if (dbPlot) {
          return Promise.resolve(null);
        }
        const estateEntity = await this.EstateRepository.findOne({
          where: {
            estateId: plot.estateId,
          },
        });
        const plotCreated = this.plotRepository.create({
          ...plot,
          estate: estateEntity,
        });
        console.log(plotCreated);
        // return Promise.resolve(await this.plotRepository.save(plot));
        return Promise.resolve(await this.plotRepository.save(plotCreated));
      })
      .catch((error) => Promise.reject(error));
  }

  createSeed(plotSeed: CreatePlotDto[]): Array<Promise<Plot>> {
    return plotSeed.map(async (plot: CreatePlotDto) => {
      return this.create(plot);
    });
  }

  async findAll(query: Object): Promise<Plot[]> {
    if (!query) return this.plotRepository.find();

    try {
      const value = Object.values(query)[0];
      const key: string = Object.keys(query)[0];
      if (key.includes('.')) {
        const conpondKey = key.split('.');
        return await this.plotRepository.findBy({
          [conpondKey[0]]: { [conpondKey[1]]: value },
        });
      }
      return await this.plotRepository.findBy({ [key]: value });
    } catch (error) {
      throw new NotFoundException(`Field ${Object.keys(query)[0]} not found`);
    }
  }

  findOne(id: number) {
    return this.plotRepository.findOne({
      where: {
        plotId: id,
      },
    });
  }

  update(id: number, updatePlotDto: UpdatePlotDto) {
    return `This action updates a #${id} plot`;
  }

  remove(id: number) {
    return `This action removes a #${id} plot`;
  }
}
