import { Injectable, Logger } from "@nestjs/common";
import { UsersService } from "./users/users.service"

@Injectable()
export class Seeder {
  constructor(
    private readonly logger: Logger,
    private readonly UsersService: UsersService,
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
    return await Promise.all(this.UsersService.createBefore())
      .then(createdLanguages => {
        // Can also use this.logger.verbose('...');
        this.logger.debug(
          'No. of languages created : ' +
            // Remove all null values and return only created languages.
            createdLanguages.filter(
              nullValueOrCreatedLanguage => nullValueOrCreatedLanguage,
            ).length,
        );
        return Promise.resolve(true);
      })
      .catch(error => Promise.reject(error));
  }
}