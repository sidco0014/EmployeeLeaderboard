import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCompareScoresComponent } from './employee-compare-scores.component';

describe('EmployeeCompareScoresComponent', () => {
  let component: EmployeeCompareScoresComponent;
  let fixture: ComponentFixture<EmployeeCompareScoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeCompareScoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeCompareScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
