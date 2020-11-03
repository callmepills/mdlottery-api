import { Module } from '@nestjs/common';
import { ScratchoffModule } from './scratchoff/scratchoff.module';

@Module({
  imports: [ScratchoffModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
