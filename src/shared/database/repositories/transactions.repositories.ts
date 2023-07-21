import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { type Prisma } from '@prisma/client';

@Injectable()
export class TransactionsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDTO: Prisma.TransactionCreateArgs) {
    return this.prismaService.transaction.create(createDTO);
  }

  findAll(findAllDTO: Prisma.TransactionFindManyArgs) {
    return this.prismaService.transaction.findMany(findAllDTO);
  }

  findFirst(findFirstDTO: Prisma.TransactionFindFirstArgs) {
    return this.prismaService.transaction.findFirst(findFirstDTO);
  }
}
