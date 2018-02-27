import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLeaderboardComponent } from './employee-leaderboard.component';

describe('EmployeeLeaderboardComponent', () => {
  let component: EmployeeLeaderboardComponent;
  let fixture: ComponentFixture<EmployeeLeaderboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeLeaderboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
