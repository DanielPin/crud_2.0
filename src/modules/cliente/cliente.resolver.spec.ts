import { Test, TestingModule } from '@nestjs/testing';
import { ClienteResolver } from './cliente.resolver';

describe('ClienteResolver', () => {
  let resolver: ClienteResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClienteResolver],
    }).compile();

    resolver = module.get<ClienteResolver>(ClienteResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
