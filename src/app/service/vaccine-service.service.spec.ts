import { TestBed } from '@angular/core/testing';

import { VaccineServiceService } from './vaccine-service.service';

describe('VaccineServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VaccineServiceService = TestBed.get(VaccineServiceService);
    expect(service).toBeTruthy();
  });
});
