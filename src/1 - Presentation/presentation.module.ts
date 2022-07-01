import { Module } from '@nestjs/common';
import { LoginController } from 'src/1 - Presentation/controllers/login/login.controller';
import { UsersController } from 'src/1 - Presentation/controllers/users/users.controller';
import { ServicesModule } from 'src/2 - Services/services.module';
import { RepositoresModule } from 'src/3 - Repositories/repositores.module';
import { CoreModule } from 'src/4 - Core/core.module';

@Module({
  imports: [ServicesModule, RepositoresModule, CoreModule],
  controllers: [LoginController, UsersController],
})
export class PresentationModule {}
