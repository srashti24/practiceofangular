import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employeecount',
  templateUrl: './employeecount.component.html',
  styleUrls: ['./employeecount.component.css']
})
export class EmployeecountComponent  {

  selectRadioButtonValue:string="All";//property keep track of radio button selected
  //*********custom event*********
  @Output()
  countRadioButtonSelectionChanged:EventEmitter<string>=new EventEmitter<string>();//event data or event payload is string
  //******************* */
@Input()
all:number;
@Input()
male:number;
@Input()
female:number;
//********method to raise the custom event */
onRadioButtonSectionChange(){
 this. countRadioButtonSelectionChanged.emit(this.selectRadioButtonValue);//emit method to raise the event
 console.log(this.selectRadioButtonValue);
}

  
}
