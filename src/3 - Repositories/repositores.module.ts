import { Module } from '@nestjs/common';
import { UsersRepository } from 'src/3 - Repositories/users-repository/users-repository';
import { CoreModule } from 'src/4 - Core/core.module';

@Module({
  imports: [CoreModule],
  providers: [UsersRepository],
  exports: [UsersRepository],
})
export class RepositoresModule {}
