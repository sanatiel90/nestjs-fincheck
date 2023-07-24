import { ArgumentMetadata, ParseEnumPipe } from '@nestjs/common';

//criando Pipe personalizado que estende de ParseEnumPipe, para definir que o parametro analisado nao precise ser obrigatorio
export class OptionalParseEnumPipe<T = any> extends ParseEnumPipe {
  //fazendo override do metodo transform do ParseEnumPipe: faz IF pra ver se foi passado o parametro (que fica em 'value'), se nao tiver sido, retorna undefined
  //caso tenha sido passado value, chama o transform da class pai (ParseEnumPipe) atraves do super, fazendo a validacao normal se o value é ENUM
  override transform(value: T, metadata: ArgumentMetadata): Promise<string> {
    if (typeof value === 'undefined') {
      return undefined;
    }
    return super.transform(value, metadata);
  }
}
