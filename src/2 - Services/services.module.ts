import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from 'src/2 - Services/auth/auth-service/auth.service';
import { AuthStrategyService } from 'src/2 - Services/auth/auth-strategy-service/auth-strategy.service';
import { UsersService } from 'src/2 - Services/users-service/users.service';
import { RepositoresModule } from 'src/3 - Repositories/repositores.module';

@Module({
  imports: [
    RepositoresModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '120s' },
    }),
  ],
  providers: [AuthService, AuthStrategyService, UsersService],
  exports: [AuthService, AuthStrategyService, UsersService],
})
export class ServicesModule {}
