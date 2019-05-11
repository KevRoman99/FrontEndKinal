import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersListComponent } from './careers-list.component';

describe('CareersListComponent', () => {
  let component: CareersListComponent;
  let fixture: ComponentFixture<CareersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
