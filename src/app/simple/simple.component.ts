import { Component, OnInit,Input,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnChanges {
@Input()
  simpleInput:string;
  //************life tym hook************************ */
ngOnChanges(changes:SimpleChanges)
{
  for(let propertyName in changes ){
    let chg=changes[propertyName];
    let current=JSON.stringify(chg.currentValue);
    let previous=JSON.stringify(chg.previousValue);
    // console.log(propertyName +'currentValue ='+current + "previousValue ="+ previous);
   
  //**placeholder syntax**** 
    console.log(`${propertyName}:current =${current},previousValue = ${previous}`);
  }
  //************************************************** */
}
  constructor() { }

  ngOnInit() {
  }

}
