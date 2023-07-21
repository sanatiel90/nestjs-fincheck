import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';
import { SigninDTO } from './dto/signin.dto';
import { IsPublic } from '../../shared/decorators/IsPublic';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @IsPublic() //anotation personalizada usada para enviar dados no formato chave|valor, para ser capturado pelo AuthGuard
  @Post('signin')
  signin(@Body() signinDTO: SigninDTO) {
    return this.authService.signin(signinDTO);
  }

  @IsPublic() //anotation personalizada usada para enviar dados no formato chave|valor, para ser capturado pelo AuthGuard
  @Post('signup')
  signup(@Body() signupDTO: SignupDto) {
    return this.authService.signup(signupDTO);
  }
}
