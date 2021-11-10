import { TestBed } from '@angular/core/testing';

import { ApipokedexService } from './apipokedex.service';

describe('ApipokedexService', () => {
  let service: ApipokedexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApipokedexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
