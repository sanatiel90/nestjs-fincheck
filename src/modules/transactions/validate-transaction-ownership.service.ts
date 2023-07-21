import { Injectable, NotFoundException } from '@nestjs/common';
import { TransactionsRepository } from '../../shared/database/repositories/transactions.repositories';

@Injectable()
export class ValidateTransactionOwnershipService {
  constructor(
    private readonly transactionsRepository: TransactionsRepository,
  ) {}

  async validate(userId: string, transactionId: string) {
    const isOwner = await this.transactionsRepository.findFirst({
      where: {
        userId,
        id: transactionId,
      },
    });

    if (!isOwner) {
      throw new NotFoundException('Category account not found');
    }
  }
}
