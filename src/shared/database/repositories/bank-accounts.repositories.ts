import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { type Prisma } from '@prisma/client';

@Injectable()
export class BankAccountsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDTO: Prisma.BankAccountCreateArgs) {
    return this.prismaService.bankAccount.create(createDTO);
  }

  //essa viagem aqui é pra conseguir acessar tabelas intermediarias dentro do codigo, numa relacao one to many, e ainda precisou mudar o tsconfig.json
  findAll<T extends Prisma.BankAccountFindManyArgs>(
    findAllDTO: Prisma.SelectSubset<T, Prisma.BankAccountFindManyArgs>,
  ) {
    console.log('a');
    return this.prismaService.bankAccount.findMany(findAllDTO);
  }

  findFirst(findFirstDTO: Prisma.BankAccountFindFirstArgs) {
    return this.prismaService.bankAccount.findFirst(findFirstDTO);
  }

  update(updateDTO: Prisma.BankAccountUpdateArgs) {
    return this.prismaService.bankAccount.update(updateDTO);
  }

  delete(deleteDTO: Prisma.BankAccountDeleteArgs) {
    return this.prismaService.bankAccount.delete(deleteDTO);
  }
}
