import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/4 - Core/domain/entities/user.entity';
import { MethodInspector } from 'src/4 - Core/utilities/decorators/log-input.decorator';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  @MethodInspector()
  async login(foundUser: User) {
    const { isActive, firstName } = foundUser;
    const payload = {
      isActive,
      firstName,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
