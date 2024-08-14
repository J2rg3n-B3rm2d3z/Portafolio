import { TestBed } from '@angular/core/testing';

import { HomeinfService } from './homeinf.service';

describe('HomeinfService', () => {
  let service: HomeinfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeinfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
