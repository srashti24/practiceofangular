import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
// import { EmployeeComponent } from './employee/employee.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
// import { DatePipe } from '@angular/common';
import { EmployeePipePipe } from './employeeTitlePipe/employee-pipe.pipe';
import { EmployeecountComponent } from './employeecount/employeecount.component';
import { SimpleComponent } from './simple/simple.component';
import{EmployeeseviceService } from './services/employeesevice.service';


@NgModule({
  declarations: [
    AppComponent,
    // EmployeeComponent,
    EmployeelistComponent,
    EmployeePipePipe,
    EmployeecountComponent,
    SimpleComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [EmployeeseviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
