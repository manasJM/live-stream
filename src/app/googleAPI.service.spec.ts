import { TestBed, inject } from '@angular/core/testing';

import { GoogleAPIService } from './googleAPI.service';

describe('GoogleAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleAPIService]
    });
  });

  it('should be created', inject([GoogleAPIService], (service: GoogleAPIService) => {
    expect(service).toBeTruthy();
  }));
});
