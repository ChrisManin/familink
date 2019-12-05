import { TestBed } from '@angular/core/testing';

import { TribesService } from './tribes.service';

describe('TribesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TribesService = TestBed.get(TribesService);
    expect(service).toBeTruthy();
  });
});
