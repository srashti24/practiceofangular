import { Injectable } from '@angular/core';
 import {IEmployee} from '../employeelist/employeeInterface';
@Injectable()  

export class EmployeeseviceService {
  constructor() { }
getEmployee():IEmployee[]
{

  return [
  {code: 'emp101', name: 'srashti',dob:'01/22/2019',salary:500.44,gender:'male'},
  {code: 'emp102', name: 'srashti',dob:'01/22/2019',salary:38889,gender:'female'},
  {code: 'emp103', name: 'srashti',dob:'01/22/2019',salary:500.44,gender:'male'},
  {code: 'emp104', name: 'srashti',dob:'01/22/2019',salary:500.4,gender:'male'},
  {code: 'emp105', name: 'srashti',dob:'01/22/2019',salary:500.44,gender:'female'},
  {code: 'emp105', name: 'srashti',dob:'01/22/2019',salary:500.44,gender:'female'}
  ] ;

}
}