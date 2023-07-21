import {
  ExecutionContext,
  UnauthorizedException,
  createParamDecorator,
} from '@nestjs/common';

//criando decorator personalizado para capturar o userId que esta na Request e fornece-lo para os controllers
export const ActiveUserId = createParamDecorator<undefined>(
  (data, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest(); //pegando a Request atual
    const userId = request.userId;
    if (!userId) {
      throw new UnauthorizedException();
    }
    return userId;
  },
);
