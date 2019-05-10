import { TestBed } from '@angular/core/testing';

import { AcademicUnitsService } from './academic-units.service';

describe('AcademicUnitsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AcademicUnitsService = TestBed.get(AcademicUnitsService);
    expect(service).toBeTruthy();
  });
});
