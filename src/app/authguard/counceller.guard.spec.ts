import { TestBed, async, inject } from '@angular/core/testing';

import { CouncellerGuard } from './counceller.guard';

describe('CouncellerGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CouncellerGuard]
    });
  });

  it('should ...', inject([CouncellerGuard], (guard: CouncellerGuard) => {
    expect(guard).toBeTruthy();
  }));
});
