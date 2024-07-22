import { ConflictException, Injectable } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Estate } from 'src/estate/estate.entity';
import { Plot } from 'src/plot/plot.entity';
import { Repository } from 'typeorm';
import { Sale } from './entities/sale.entity';
import { PaymentSaleDto } from './dto/payment-sale-dto';

@Injectable()
export class SaleService {
  constructor(
    @InjectRepository(Sale)
    private saleRepository: Repository<Sale>,
  ) {}

  async makePayment(paymentSaleDto: PaymentSaleDto, userId: number){
    const sale = await this.saleRepository.findOne({where: {plotId: paymentSaleDto.plotId, userId: userId}})
    let payment
    if (paymentSaleDto.fullPayment) {
      payment = this.saleRepository.create({
        ...sale,
        remainingInstallments: 0,
      })
    } else {
      payment = this.saleRepository.create({
        ...sale,
        remainingInstallments: sale.remainingInstallments > 0 ? sale.remainingInstallments - 1 : 0,
      })
    }
    const updatedEntity = this.saleRepository.merge(sale, payment)
    return this.saleRepository.save(updatedEntity);
  }

  async create(createSaleDto: CreateSaleDto) {
    const sale = await this.saleRepository.findOne({where: {plotId: createSaleDto.plotId}})
    if (sale?.userId == createSaleDto.userId) throw new ConflictException(`Compra desse plot ja realizada`);
    if (sale) throw new ConflictException(`Plot no longer available`);
    const getlInstallmentPrice = () => {
      if (createSaleDto.totalInstallments > 1) {
        return createSaleDto.totalCost / createSaleDto.totalInstallments
      }
      return 0
    }

    const newSale = await this.saleRepository.create({
      ...createSaleDto,
      installmentCost: getlInstallmentPrice(),
      remainingInstallments: createSaleDto.totalInstallments,
    });
    
    return await this.saleRepository.save(newSale);
  }

  findAll() {
    return this.saleRepository.find({relations: ['plot', 'plot.estate', 'users']})
  }

  findByUser(id: number) {
    return this.saleRepository.find({where: {userId: id}, relations: ['plot', 'plot.estate', 'users']})
  }

  update(id: number, updateSaleDto: UpdateSaleDto) {
    return `This action updates a${id} sale`;
  }

  remove(id: number) {
    return `This action removes a #${id} sale`;
  }
}
