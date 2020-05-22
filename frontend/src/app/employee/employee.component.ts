import { Component, OnInit } from '@angular/core';

import {EmployeeService} from '../shared/employee.service';
  import { from } from 'rxjs';
import { NgForm } from '@angular/forms';
import {Employee} from '../shared/empmodel';


declare var M : any;
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public empservice : EmployeeService) { }

  ngOnInit(): void {
    this.resetForm();
    this.empList();
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

  onSubmit(form:NgForm){
    if(form.value._id==""){
      this.empservice.regEmployee(form.value).subscribe((res)=>{
        this.resetForm(form);
        this.empList();

      });
      M.toast({html: 'rejisterderd successfully',classes:'rounded'});


    }
    else{
      this.empservice.putEmployee(form.value).subscribe((res)=>{
        this.resetForm(form);
        this.empList();

      });
      M.toast({html: 'Updated successfully',classes:'rounded'});


    }

  }

  empList(){
    this.empservice.getEmpolyees().subscribe((res)=>{
      this.empservice.employees=res as Employee[];
    })
  }

  onEdit(emp : Employee){
    this.empservice.selectedEmployee = emp;
  }

  onDelete(id:string,form:NgForm){

      if(confirm("Are you sure to delete that record?")==true){
        this.empservice.empDelete(id).subscribe((res)=>{
          this.empList();
          this.resetForm(form);

        });

      }
      M.toast({html: 'Delete successfully',classes:'rounded'});
  }

}
