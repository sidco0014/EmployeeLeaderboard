import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeScoresComponent } from './employee-scores.component';

describe('EmployeeScoresComponent', () => {
  let component: EmployeeScoresComponent;
  let fixture: ComponentFixture<EmployeeScoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeScoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
