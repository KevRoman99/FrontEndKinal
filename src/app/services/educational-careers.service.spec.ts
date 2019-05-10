import { TestBed } from '@angular/core/testing';

import { EducationalCareersService } from './educational-careers.service';

describe('EducationalCareersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EducationalCareersService = TestBed.get(EducationalCareersService);
    expect(service).toBeTruthy();
  });
});
