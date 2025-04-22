import { TestBed } from '@angular/core/testing';

import { CreatingListService } from './creating-list.service';

describe('CreatingListService', () => {
  let service: CreatingListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatingListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
