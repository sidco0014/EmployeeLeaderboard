import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {EmployeeService } from '../employee.service';
import { Employee } from '../employees';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  @Input() employee: Employee;

  constructor(
    private route: ActivatedRoute,
    private EmployeeService:EmployeeService) {
  }

  ngOnInit():void {
    this.getEmployee();
    this.calculateScore();
  }

  getEmployee():void {
    const EID = +this.route.snapshot.paramMap.get('id');
    this.EmployeeService.getSelectedEmployee(EID).subscribe(employee =>this.employee = employee );
  }

  calculateScore(){
    let totalScore =0;
    for(let i=0; i<this.employee.scoreList.length; i++){
      totalScore = totalScore + this.employee.scoreList[i];
    }
    this.employee.score = Math.round(totalScore/(this.employee.scoreList.length * 50)*100);
  }
}
