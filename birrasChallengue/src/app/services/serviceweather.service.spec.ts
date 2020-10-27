import { TestBed } from '@angular/core/testing';

import { ServiceweatherService } from './serviceweather.service';

describe('ServiceweatherService', () => {
  let service: ServiceweatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceweatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
