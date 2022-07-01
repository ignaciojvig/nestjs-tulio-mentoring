import { Body, Controller, Post } from '@nestjs/common';
import { LoginFormViewModel } from 'src/1 - Presentation/view-models/login/login-form.viewmodel';
import { LoginTokenViewModel } from 'src/1 - Presentation/view-models/login/login-token.viewmodel';
import { AuthService } from 'src/2 - Services/auth/auth-service/auth.service';
import { UsersService } from 'src/2 - Services/users-service/users.service';
import { MethodInspector } from 'src/4 - Core/utilities/decorators/log-input.decorator';

@Controller('login')
export class LoginController {
  constructor(
    private authService: AuthService,
    private userService: UsersService,
  ) {}

  @Post()
  @MethodInspector()
  async login(
    @Body() loginForm: LoginFormViewModel,
  ): Promise<LoginTokenViewModel> {
    const user = await this.userService.getByCredentials(loginForm);
    return await this.authService.login(user);
  }
}
