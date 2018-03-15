import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
coloumnSpan = 2;
firstName = 'srashti';
secondName = 'goel';
gender = 'female';
age = 25;
showdetails = true;

name = 'lehar';
nameNew = 'gaurav';
toggleDetails(): void {
  this.showdetails = !this.showdetails;
}
 }
