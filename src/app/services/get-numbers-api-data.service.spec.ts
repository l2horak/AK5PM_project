import { TestBed } from '@angular/core/testing';

import { GetNumbersApiDataService } from './get-numbers-api-data.service';

describe('GetNumbersApiDataService', () => {
  let service: GetNumbersApiDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetNumbersApiDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
