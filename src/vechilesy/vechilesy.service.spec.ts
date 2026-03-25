import { Test, TestingModule } from '@nestjs/testing';
import { VechilesyService } from './vechilesy.service';

describe('VechilesyService', () => {
  let service: VechilesyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VechilesyService],
    }).compile();

    service = module.get<VechilesyService>(VechilesyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
