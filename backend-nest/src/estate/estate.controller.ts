import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
  UploadedFile,
  UseInterceptors,
  Put,
} from '@nestjs/common';
import { EstateService } from './estate.service';
import { CreateEstateDto } from './dto/create-estate.dto';
import { UpdateEstateDto } from './dto/update-estate.dto';
import * as fs from 'fs';
import { Response } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { json } from 'stream/consumers';

@Controller('estate')
export class EstateController {
  constructor(private readonly estateService: EstateService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  create( @Body() body: {stateFields: string}, @UploadedFile() file: Express.Multer.File) {
    const json = JSON.parse(body.stateFields)
    return this.estateService.create(json, file);
  }

  @Get()
  findAll() {
    return this.estateService.findAll();
  }

  @Get('/img')
  async getImage(@Res() res: Response) {
    const filePath = 'src/assets/imgs/estateMap.png';
    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log('flllll')
    return this.estateService.findOne(+id);
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('file'))
  updateOne(@Param('id') id: string, @Body() body: {stateFields: string}, @UploadedFile() file: Express.Multer.File) {
    const json = JSON.parse(body.stateFields)
    return this.estateService.updateOne(+id, json, file);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEstateDto: UpdateEstateDto) {
    return this.estateService.update(+id, updateEstateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estateService.remove(+id);
  }
}
