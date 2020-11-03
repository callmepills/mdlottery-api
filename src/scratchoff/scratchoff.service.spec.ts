import { Test, TestingModule } from '@nestjs/testing';
import { ScratchoffService } from './scratchoff.service';

describe('ScratchoffService', () => {
  let service: ScratchoffService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScratchoffService],
    }).compile();

    service = module.get<ScratchoffService>(ScratchoffService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
