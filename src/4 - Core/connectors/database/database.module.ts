import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { connectionParams } from 'ormconfig';
import { User } from 'src/4 - Core/domain/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forRoot(connectionParams),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
