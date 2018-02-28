import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeLeaderboardComponent } from './employee-leaderboard/employee-leaderboard.component';

import {EmployeeService } from './employee.service';

import { AppRoutingModule } from './app-routing.module';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { EmployeeScoresComponent } from './employee-scores/employee-scores.component';
import { EmployeeCompareScoresComponent } from './employee-compare-scores/employee-compare-scores.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeLeaderboardComponent,
    EmployeeDetailsComponent,
    EmployeeScoresComponent,
    EmployeeCompareScoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
