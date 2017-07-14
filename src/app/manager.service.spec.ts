import { TestBed, inject } from '@angular/core/testing';

import { ClubManagerService } from './member.service';

describe('ClubManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClubManagerService]
    });
  });

  it('should ...', inject([ClubManagerService], (service: ClubManagerService) => {
    expect(service).toBeTruthy();
  }));
});
