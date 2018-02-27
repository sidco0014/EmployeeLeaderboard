import {Component, Input, OnInit} from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employees';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-employee-leaderboard',
  templateUrl: './employee-leaderboard.component.html',
  styleUrls: ['./employee-leaderboard.component.css']
})
export class EmployeeLeaderboardComponent implements OnInit {

  @Input() employee: Employee;
  chartData = [];
  chartOptions = {
    responsive: true
  };
  chartLabels =[];


  constructor(private EmployeeService:EmployeeService ) { }
  employeeList:any = [];
  employeeScoreDict:any = [];

  ngOnInit() {
    this.playerLeaderboard();
  }

  playerLeaderboard(){
    this.EmployeeService.getEmployees().subscribe(employee => this.employeeList = employee);
    this.calculatePlayerScore(this.employeeList);
  }

  calculatePlayerScore(employeeList){
    for(let i=0; i<employeeList.length; i++){
      var employeeScore = employeeList[i].scoreList;
      let totalScore = 0;
      for(let j=0; j<employeeScore.length; j++){
        totalScore = totalScore + employeeScore[j];
      }
        var percentScore = Math.round((totalScore/((employeeScore.length) *50))*100);
        this.employeeScoreDict.push({
          'name': employeeList[i].name,
          'percentScore': percentScore,
        });
        this.employeeScoreDict.sort(function (a, b) {
          return  b.percentScore - a.percentScore;
        });
      }
    this.getChartForLeaderboard(this.employeeScoreDict);
    }

    getChartForLeaderboard(employeeNameScoreDict) {
      let employeeNames = [];
      let employeeScores =[];
      for(let i=0; i<employeeNameScoreDict.length; i++){
        employeeNames.push(employeeNameScoreDict[i].name);
        employeeScores.push(employeeNameScoreDict[i].percentScore);
      }
      this.chartLabels = employeeNames;
      this.chartData.push({
        'data' : employeeScores,
      })
    }
  }
