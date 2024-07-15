import { Injectable, Logger } from '@nestjs/common';
import { UsersService } from '../../users/users.service';
import { EstateService } from '../../estate/estate.service';
import { PlotService } from '../../plot/plot.service';
import { userSeed, estateSeed, plotSeed } from './seederData'

@Injectable()
export class Seeder {
  constructor(
    private readonly logger: Logger,
    private readonly UsersService: UsersService,
    private readonly EstateService: EstateService,
    private readonly PlotService: PlotService,
  ) {}
  async seed() {
    try {
      // await Promise.all([this.users(), this.estates(), this.plots()]);
      await  this.estates()
      await this.plots();
      await this.users();
      this.logger.debug('Successfully completd seding users and estates...');
    } catch (error) {
      this.logger.error('Failed seeding users and estates:', error);
      throw error;
    }
  }
  async users() {
    return await Promise.all(this.UsersService.createSeed(userSeed))
      .then((createdUser) => {
        this.logger.debug(
          'No. of users created: ' +
            createdUser.filter(
              (nullValueOrCreatedLanguage) => nullValueOrCreatedLanguage,
            ).length,
        );
        return Promise.resolve(true);
      })
      .catch((error) => Promise.reject(error));
  }

  async plots() {
    return await Promise.all(this.PlotService.createSeed(plotSeed))
      .then((createdPlot) => {
        this.logger.debug(
          'No. of plots creaed:' +
            createdPlot.filter(
              (nullValueOrCreatedLanguage) => nullValueOrCreatedLanguage,
            ).length,
        );
        return Promise.resolve(true);
      })
      .catch((error) => Promise.reject(error));
  }

  async estates() {
    return await Promise.all(this.EstateService.createSeed(estateSeed))
      .then((createdEstate) => {
        this.logger.debug(
          'No. of languages creaed: ' +
            createdEstate.filter(
              (nullValueOrCreatedLanguage) => nullValueOrCreatedLanguage,
            ).length,
        );
        return Promise.resolve(true);
      })
      .catch((error) => Promise.reject(error));
  }
}
