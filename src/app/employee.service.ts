import { Employee } from './employees';
import { EMPLOYEES } from './demo-employees';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';

@Injectable()
export class
EmployeeService {

  constructor() { }

  getEmployees(){
    return of(EMPLOYEES);
  }

  getSelectedEmployee(id:number){
    return of(EMPLOYEES.find(employee => employee.id === id));
  }

}
