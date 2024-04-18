import { Injectable, Logger } from "@nestjs/common";
import { UsersService } from "../../users/users.service"
import { EstateService } from "../../estate/estate.service"
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
    await this.users()
      .then(completed => {
        this.logger.debug('Successfuly completed seeding users...');
        Promise.resolve(completed);
      })
      .catch(error => {
        this.logger.error('Failed seeding users...');
        Promise.reject(error);
      });
  }
  async users() {
    return await Promise.all(this.UsersService.createSeed(usersSeed))
      .then(createdUser => {
        // Can also use this.logger.verbose('...');
        this.logger.debug(
          'No. of languages created: ' +
            // Remove all null values and return only created languages.
            createdUser.filter(
              nullValueOrCreatedLanguage => nullValueOrCreatedLanguage,
            ).length,
        );
        return Promise.resolve(true);
      })
      .catch(error => Promise.reject(error));
  }

  async estates() {
    return await Promise.all(this.EstateService.createSeed(estateSeed))
      .then(createdEstate => {
        // Can also use this.logger.verbose('...');
        this.logger.debug(
          'No. of languages created: ' +
            // Remove all null values and return only created languages.
            createdEstate.filter(
              nullValueOrCreatedLanguage => nullValueOrCreatedLanguage,
            ).length,
        );
        return Promise.resolve(true);
      })
      .catch(error => Promise.reject(error));
  }
}