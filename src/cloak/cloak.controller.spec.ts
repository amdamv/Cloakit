import { Test, TestingModule } from '@nestjs/testing';
import { CloakController } from './cloak.controller';

describe('CloakController', () => {
  let controller: CloakController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CloakController],
    }).compile();

    controller = module.get<CloakController>(CloakController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
