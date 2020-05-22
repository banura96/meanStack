import { Component, OnInit } from '@angular/core';

import {EmployeeService} from '../shared/employee.service';
  import { from } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public empservice : EmployeeService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if (form!=null)
    form.resetForm();
    this.empservice.selectedEmployee={
      _id:'',
      name:'',
      position:'',
      office: '',
      salary:null
   }
 }

  onSubmit(){

  }



}
