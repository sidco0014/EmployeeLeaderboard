import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employees';
import {NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee-compare-scores',
  templateUrl: './employee-compare-scores.component.html',
  styleUrls: ['./employee-compare-scores.component.css']
})
export class EmployeeCompareScoresComponent implements OnInit {

  constructor(private EmployeeService:EmployeeService) { }

  employeeList:any = [];
  selectedEmployee1Name: string = '';
  selectedEmployee2Name: string = '';


  ngOnInit() {
    this.getEmployeeList();
  }

  getEmployeeList(){
    this.EmployeeService.getEmployees().subscribe(employee => this.employeeList =  employee);
    console.log(this.employeeList);
    return this.employeeList
  }

  onSubmit(formData) {
    console.log(formData)
  }

  selectChangedHandler1(event: any) {
    for(let i=0; i<this.employeeList.length; i++){
      if(this.employeeList[i].id == event.target.value){
       this.selectedEmployee1Name = this.employeeList[i].name;
      }
    }
  }

  selectChangedHandler2(event: any) {
    for(let i=0; i<this.employeeList.length; i++){
      if(this.employeeList[i].id == event.target.value){
        this.selectedEmployee2Name = this.employeeList[i].name;
      }
    }
  }
}
