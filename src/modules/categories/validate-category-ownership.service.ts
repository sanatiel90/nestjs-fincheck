import { Injectable, NotFoundException } from '@nestjs/common';
import { CategoriesRepository } from '../../shared/database/repositories/categories.repositories';

@Injectable()
export class ValidateCategoryOwnershipService {
  constructor(private readonly categoriesRepository: CategoriesRepository) {}

  async validate(userId: string, categoryId: string) {
    const isOwner = await this.categoriesRepository.findFirst({
      where: {
        userId,
        id: categoryId,
      },
    });

    if (!isOwner) {
      throw new NotFoundException('Category account not found');
    }
  }
}
