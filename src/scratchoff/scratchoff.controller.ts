import { Controller, Get, Header } from '@nestjs/common';
import { Scratchoff } from './scratchoff';
import { ScratchoffService } from './scratchoff.service';

@Controller('scratchoffs')
export class ScratchoffController {

    constructor(private service: ScratchoffService) { }

    @Get()
    @Header('Content-Type', 'text/csv')
    async findScratchoffs() {
        return await this.service.findScratchoffs();
    }
}
