import { Test, TestingModule } from '@nestjs/testing';
import { VechilesyResolver } from './vechilesy.resolver';
import { VechilesyService } from './vechilesy.service';

describe('VechilesyResolver', () => {
  let resolver: VechilesyResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VechilesyResolver, VechilesyService],
    }).compile();

    resolver = module.get<VechilesyResolver>(VechilesyResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
