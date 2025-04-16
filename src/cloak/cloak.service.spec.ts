import { Test, TestingModule } from '@nestjs/testing';
import { CloakService } from './cloak.service';

describe('CloakService', () => {
  let service: CloakService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CloakService],
    }).compile();

    service = module.get<CloakService>(CloakService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
