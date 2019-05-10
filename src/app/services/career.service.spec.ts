import { TestBed } from '@angular/core/testing';

import { CareerService } from './career.service';

describe('CareerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CareerService = TestBed.get(CareerService);
    expect(service).toBeTruthy();
  });
});
