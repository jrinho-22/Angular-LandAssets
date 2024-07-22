import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { PlotService } from './plot.service';
import { CreatePlotDto } from './dto/create-plot.dto';
import { UpdatePlotDto } from './dto/update-plot.dto';
import { Plot } from './plot.entity';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('plot')
export class PlotController {
  constructor(private readonly plotService: PlotService) {}

  @Post()
  create(@Body() createPlotDto: CreatePlotDto) {
    return this.plotService.create(createPlotDto);
  }

  @Get()
  findBy(@Query() query?: Object): Promise<Plot[]> {
    return this.plotService.findBy(query);
  }

  @Put(':id')
  updateOne(@Param('id') id: string, @Body() body: UpdatePlotDto) {
    return this.plotService.updateOne(+id, body);
  }

  // @Get()
  // findAll(@Query() query?: Object): Promise<Plot[]> {
  //   return this.plotService.findAll(query);
  // }

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
