import { Module } from '@nestjs/common';
import { PlotService } from './plot.service';
import { PlotController } from './plot.controller';
import { Plot } from './plot.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estate } from 'src/estate/estate.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Plot, Estate])],
  controllers: [PlotController],
  providers: [PlotService],
  exports: [PlotService]
})
export class PlotModule {}
