import { TestBed } from '@angular/core/testing';

import { OnLineOffLineService } from './on-line-off-line.service';

describe('OnLineOffLineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OnLineOffLineService = TestBed.get(OnLineOffLineService);
    expect(service).toBeTruthy();
  });
});
