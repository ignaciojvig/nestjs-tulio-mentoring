import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/4 - Core/connectors/database/database.module';

@Module({
  imports: [DatabaseModule],
  exports: [DatabaseModule],
})
export class CoreModule {}
