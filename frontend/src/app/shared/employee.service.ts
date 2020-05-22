import { Injectable } from '@angular/core';
import {Employee} from './empmodel';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
selectedEmployee:Employee;
employees:Employee[];

baseURL = "http://localhost:3000/employees";
  constructor(private http : HttpClient) { }

  regEmployee(emp:Employee){
      return this.http.post(this.baseURL,emp);
  }

  getEmpolyees(){
    return this.http.get(this.baseURL);
  }

  putEmployee(emp : Employee){
    return this.http.put(this.baseURL + '/${emp._id}', emp);
  }

  empDelete(_id:string){
    return this.http.delete(this.baseURL + '/${_id}');
  }


}
