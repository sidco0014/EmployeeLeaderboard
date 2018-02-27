import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {EmployeeService } from '../employee.service';
import { Employee } from '../employees';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-employee-scores',
  templateUrl: './employee-scores.component.html',
  styleUrls: ['./employee-scores.component.css']
})
export class EmployeeScoresComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private EmployeeService:EmployeeService) {
  }

  @Input() employee: Employee;
  chartData = [];
  chartOptions = {
    responsive: true
  };
  chartLabels =[];

  ngOnInit() {
    this.getEmployee();
  }

  getEmployee():void {
    const EID = +this.route.snapshot.paramMap.get('id');
    this.EmployeeService.getSelectedEmployee(EID).subscribe(employee => this.employee = employee);
    this.getEmployeeScore(this.employee);
  }

  getEmployeeScore(employee){
    let scoreForEmployee = [];
    for(let i=0; i<employee.scoreList.length; i++){
      scoreForEmployee.push(employee.scoreList[i]);
    }
    let roundForEmployee = ['I', 'II', 'III', 'IV', 'V'];
    this.chartLabels = roundForEmployee;
    this.chartData.push({
      'data' : scoreForEmployee,
    })
  }





}
