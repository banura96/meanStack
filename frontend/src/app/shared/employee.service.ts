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
  constructor(private http : HttpClient) { }
}
