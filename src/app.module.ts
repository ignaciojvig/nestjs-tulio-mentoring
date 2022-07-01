import { Module } from '@nestjs/common';
import { PresentationModule } from 'src/1 - Presentation/presentation.module';

@Module({
  imports: [PresentationModule],
})
export class AppModule {}
