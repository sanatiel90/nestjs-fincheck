import { CreateBankAccountDto } from './create-bank-account.dto';

//usar o extends PartialType faz com que as validacoes presentes no CreateBankAccountDto passem a nao ser mais obrigatorias no UpdateBankAccountDto; nesse caso nao vai ser
//usado assim
//export class UpdateBankAccountDto extends PartialType(CreateBankAccountDto) {}

export class UpdateBankAccountDto extends CreateBankAccountDto {}
