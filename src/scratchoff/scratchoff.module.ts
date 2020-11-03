import { HttpModule, Module } from '@nestjs/common';
import { ScratchoffController } from './scratchoff.controller';
import { ScratchoffService } from './scratchoff.service';

@Module({
  controllers: [ScratchoffController],
  imports: [HttpModule],
  providers: [ScratchoffService]
})
export class ScratchoffModule {}
