import { Controller, Get } from '@nestjs/common';
import { Scratchoff } from './scratchoff';
import { ScratchoffService } from './scratchoff.service';

@Controller('scratchoffs')
export class ScratchoffController {

    constructor(private service: ScratchoffService) { }

    @Get()
    async findScratchoffs() {
        return await this.service.findScratchoffs();
    }
}
