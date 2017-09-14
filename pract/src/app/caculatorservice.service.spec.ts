import { TestBed, inject } from '@angular/core/testing';

import { CaculatorserviceService } from './caculatorservice.service';

describe('CaculatorserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CaculatorserviceService]
    });
  });

  it('should be created', inject([CaculatorserviceService], (service: CaculatorserviceService) => {
    expect(service).toBeTruthy();
  }));
});
