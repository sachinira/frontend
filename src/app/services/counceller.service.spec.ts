import { TestBed, inject } from '@angular/core/testing';

import { CouncellerService } from './counceller.service';

describe('CouncellerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CouncellerService]
    });
  });

  it('should be created', inject([CouncellerService], (service: CouncellerService) => {
    expect(service).toBeTruthy();
  }));
});
