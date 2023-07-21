import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsersRepository } from './repositories/user.repositories';
import { CategoriesRepository } from './repositories/categories.repositories';
import { BankAccountsRepository } from './repositories/bank-accounts.repositories';
import { TransactionsRepository } from './repositories/transactions.repositories';

@Global() //deixa este modulo automaticamente visivel para todos os outros modulos da app, nao precisando q os outros modulos usam o param 'imports: []'
@Module({
  providers: [
    PrismaService,
    UsersRepository,
    CategoriesRepository,
    BankAccountsRepository,
    TransactionsRepository,
  ],
  exports: [
    UsersRepository,
    CategoriesRepository,
    BankAccountsRepository,
    TransactionsRepository,
  ],
})
export class DatabaseModule {}
