import { plainToInstance } from 'class-transformer';
import { IsNotEmpty, IsString, validateSync } from 'class-validator';

//esta classe definira as var de ambiente do sistema, com anotacoes para valida-las
class Env {
  @IsNotEmpty()
  @IsString()
  jwtSecret: string;

  @IsNotEmpty()
  @IsString()
  dbURL: string;
}

//setando valores das var de ambiente, de modo q elas virem uma instancia da classe Env
export const env: Env = plainToInstance(Env, {
  dbURL: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET,
});

//validando o obj da classe Env
const errors = validateSync(env);

//se houver erros na validacao, é lançado um erro que nao permite a app rodar
if (errors.length > 0) {
  throw new Error(JSON.stringify(errors, null, 2));
}
