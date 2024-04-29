import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PlotService } from './plot.service';
import { CreatePlotDto } from './dto/create-plot.dto';
import { UpdatePlotDto } from './dto/update-plot.dto';
import { Plot } from './plot.entity';

@Controller('plot')
export class PlotController {
  constructor(private readonly plotService: PlotService) {}

  @Post()
  create(@Body() createPlotDto: CreatePlotDto) {
    return this.plotService.create(createPlotDto);
  }

  @Get()
  findAll(@Query() query?: Object): Promise<Plot[]> {
    return this.plotService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Plot> {
    return this.plotService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlotDto: UpdatePlotDto) {
    return this.plotService.update(+id, updatePlotDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.plotService.remove(+id);
  }
}
