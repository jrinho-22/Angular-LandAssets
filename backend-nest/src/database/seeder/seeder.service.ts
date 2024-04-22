import { Injectable, Logger } from '@nestjs/common';
import { UsersService } from '../../users/users.service';
import { EstateService } from '../../estate/estate.service';
import { usersSeed } from './seederData';
import { estateSeed } from './seederData';

@Injectable()
export class Seeder {
  constructor(
    private readonly logger: Logger,
    private readonly UsersService: UsersService,
    private readonly EstateService: EstateService,
  ) {}
  async seed() {
    try {
      await Promise.all([this.users(), this.estates()]);
      this.logger.debug('Successfully completed seeding users and estates...');
    } catch (error) {
      this.logger.error('Failed seeding users and estates:', error);
      throw error;
    }
  }
  async users() {
    return await Promise.all(this.UsersService.createSeed(usersSeed))
      .then((createdUser) => {
        this.logger.debug(
          'No. of languages created: ' +
            createdUser.filter(
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
