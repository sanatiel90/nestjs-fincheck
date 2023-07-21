import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { type Prisma } from '@prisma/client';
/* os tipos providos pelo prisma, como Prisma.UserCreateArgs e Prisma.UserFindUniqueArgs, usados como DTO dos repositorios, indicam o objeto de prisma para realizar
   as operacoes do BD, como
   # Prisma.UserFindUniqueArgs
   {
      where: { email },
      select: { id: true },
   }
ou
   # Prisma.UserCreateArgs   
   {
      data: {
        name,
        email,
        password: hashPassword       
      },
   }
*/

@Injectable()
export class UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDTO: Prisma.UserCreateArgs) {
    return this.prismaService.user.create(createDTO);
  }

  findUnique(findUnique: Prisma.UserFindUniqueArgs) {
    return this.prismaService.user.findUnique(findUnique);
  }
}
