import { Component,OnInit } from '@angular/core';
import{IEmployee}from './employeeInterface';
import{EmployeeseviceService } from '../services/employeesevice.service';
@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css'],

})
export class EmployeelistComponent implements OnInit{

  employees:IEmployee[];
  selectedEmployeeCountRadioButton:string="All";// for @output created a property
 
// private _employeesevice=EmployeeseviceService;

// constructor( _employeesevice=EmployeeseviceService)
// {
//  this._employeesevice= _employeesevice;
// }


//****OR**** */

constructor(private _employeeservice :  EmployeeseviceService)
{
 
}
ngOnInit(){
  this.employees= this._employeeservice.getEmployee();
}

//**************used for trackby mehid*****************
// getemployee():void
// {
//   this.employees= [
//     {code: 'emp101', name: 'srashti',dob:'01/22/2019',gender:'male'},
//     {code: 'emp102', name: 'srashti',dob:'01/22/2019',gender:'male'},
//     {code: 'emp103', name: 'srashti',dob:'01/22/2019',gender:'male'},
//     {code: 'emp104', name: 'srashti',dob:'01/22/2019',gender:'male'},
//     {code: 'emp105', name: 'srashti',dob:'01/22/2019',gender:'female'},
   
     
//   ];
// }
// trackByEmpcode(index:number,employees:any): string
// {
// return employees.code;
// }

//************used for @INPUT DECORATOR******************* */

getTotalEmployeeCount():number{
  return this.employees.length;
}
getTotalMaleCount():number{
  return this.employees.filter(e=>e.gender==="male").length;
}

getTotalFeMaleCount():number{
  return this.employees.filter(e=>e.gender==="female").length;

}
onEmployeeCountRadioButtonChange(selectedRadioButtonValue:string):void{
  this. selectedEmployeeCountRadioButton=selectedRadioButtonValue;
  //this.GetAllData(selectedRadioButtonValue);
}
GetAllData(val:string)
{
  this.employees=this.employees.filter(e=>e.gender==val);
}
 }
