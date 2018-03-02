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
  }

  getEmployee():void {
    const EID = +this.route.snapshot.paramMap.get('id');
    this.EmployeeService.getSelectedEmployee(EID).subscribe(employee =>this.employee = employee );
  }
}
