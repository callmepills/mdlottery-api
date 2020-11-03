import { Test, TestingModule } from '@nestjs/testing';
import { ScratchoffController } from './scratchoff.controller';

describe('ScratchoffController', () => {
  let controller: ScratchoffController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScratchoffController],
    }).compile();

    controller = module.get<ScratchoffController>(ScratchoffController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
