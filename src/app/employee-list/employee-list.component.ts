import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employees';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList:any = [];
  constructor( private employeeService:EmployeeService) { }

  ngOnInit() {
    this.getEmployeeList();
  }

  getEmployeeList():void{
    this.employeeService.getEmployees().subscribe(employee =>this.employeeList = employee);

  }

}
