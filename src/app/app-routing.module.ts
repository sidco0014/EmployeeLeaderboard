import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeLeaderboardComponent }  from './employee-leaderboard/employee-leaderboard.component';
import { EmployeeListComponent }  from './employee-list/employee-list.component';
import { EmployeeDetailsComponent }  from './employee-details/employee-details.component';
import { EmployeeScoresComponent }  from './employee-scores/employee-scores.component';

const routes: Routes = [
  { path: 'detail/:id', component: EmployeeDetailsComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'leaderboard', component: EmployeeLeaderboardComponent},
  { path: 'score/:id', component: EmployeeScoresComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
