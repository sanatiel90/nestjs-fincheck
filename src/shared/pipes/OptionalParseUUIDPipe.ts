import { ArgumentMetadata, ParseUUIDPipe } from '@nestjs/common';

//criando Pipe personalizado que estende de ParseUUIDPipe, para definir que o parametro analisado nao precise ser obrigatorio
export class OptionalParseUUIDPipe extends ParseUUIDPipe {
  //fazendo override do metodo transform do ParseUUIDPipe: faz IF pra ver se foi passado o parametro (que fica em 'value'), se nao tiver sido, retorna undefined
  //caso tenha sido passado value, chama o transform da class pai (ParseUUIDPipe) atraves do super, fazendo a validacao normal se o value é UUID
  override transform(
    value: string,
    metadata: ArgumentMetadata,
  ): Promise<string> {
    if (typeof value === 'undefined') {
      return undefined;
    }
    return super.transform(value, metadata);
  }
}
