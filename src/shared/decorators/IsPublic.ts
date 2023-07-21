import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'IS_PUBLIC';

//DECORATOR PERSONALIZADO
export const IsPublic = () => SetMetadata(IS_PUBLIC_KEY, true); //modo reduzido
