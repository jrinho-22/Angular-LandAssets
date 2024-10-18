import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SaleService } from './sale.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { PaymentSaleDto } from './dto/payment-sale-dto';
import { Public } from 'src/auth/auth.contants';

@Controller('sales')
export class SaleController {
  constructor(private readonly saleService: SaleService) {}

  @Post()
  create(@Body() createSaleDto: CreateSaleDto) {
    return this.saleService.create(createSaleDto);
  }

  @Post('/payment/:userId')
  makePayment(@Body() paymentSaleDto: PaymentSaleDto, @Param('userId') userId: string) {
    return this.saleService.makePayment(paymentSaleDto, +userId);
  }

  @Public()
  @Get()
  findAll() {
    return this.saleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saleService.findByUser(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSaleDto: UpdateSaleDto) {
    return this.saleService.update(+id, updateSaleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saleService.remove(+id);
  }
}
