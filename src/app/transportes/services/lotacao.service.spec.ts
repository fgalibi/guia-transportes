import { TestBed } from '@angular/core/testing';

import { LotacaoService } from './lotacao.service';

describe('LotacaoService', () => {
  let service: LotacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LotacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
