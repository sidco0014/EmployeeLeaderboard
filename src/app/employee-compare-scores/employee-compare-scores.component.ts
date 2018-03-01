import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import {NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Chart } from 'chart.js';
import * as $ from 'jquery/dist/jquery.min.js';

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
  form;
  chartData = [];
  chartOptions = {
    responsive: true
  };
  chartLabels =[];
  ChartReady = false;

  ngOnInit() {
    this.getEmployeeList();
    this.form = new FormGroup({
      employeeName1: new FormControl("", Validators.required),
      employeeName2: new FormControl("", Validators.required),
    });
  }

  scrollFrame(){
    $(document).ready(function () {
      $("html, body").animate({ scrollTop: $(document).height() }, "slow");
      return false;
    });
  }

  clearForm(){
    location.reload();
  }

  getEmployeeList(){
    this.EmployeeService.getEmployees().subscribe(employee => this.employeeList =  employee);
    return this.employeeList
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

  //Form Submit method to get the input values
  onSubmit(formData) {

    let employeeOneId = formData.employeeName1;
    let employeeTwoId = formData.employeeName2;
    if(employeeOneId === employeeTwoId) {
      alert("Cannot compare the same two people, Please choose a different employee")
    }

    else {
      this.chartData = [];
      this.calculateScoreComparator(employeeOneId, employeeTwoId);
      this.ChartReady = true;
    }
  }

  calculateScoreComparator(employeeOneId, employeeTwoId){
    let employeeOneScoreList = [];
    let employeeTwoScoreList = [];
    let employeeOneName = '';
    let employeeTwoName = '';

    //First employee score list
    for(let i=0; i<this.employeeList.length; i++){
      if(this.employeeList[i].id == employeeOneId){
        employeeOneScoreList = this.employeeList[i].scoreList;
        employeeOneName = this.employeeList[i].name;
      }
    }

    //Second employee score list
    for(let i=0; i<this.employeeList.length; i++){
      if(this.employeeList[i].id == employeeTwoId){
        employeeTwoScoreList = this.employeeList[i].scoreList;
        employeeTwoName = this.employeeList[i].name;
      }
    }

    this.chartLabels = ['Q1', 'Q3', 'Q3', 'Q4'];
    this.chartData.push(
      {'data' : employeeOneScoreList, label: employeeOneName},
      {'data' : employeeTwoScoreList, label: employeeTwoName},
    );
    console.log(this.chartData);
  }
}
