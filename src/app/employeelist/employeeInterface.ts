export interface IEmployee
{
    code: string;
     name: string;
     dob:string;
     salary:number;
     gender:string;
    //  department?:string;// make the property optional so nor neccessay for class to implement it
    //  computeMonthlySalary(salary:number):number;
     
}

// export class Employee implements IEmployee
// {
   

//      constructor(public code:string, public name:string,public dob:string, 
//         public salary:number, public gender:string)
//     {}
//     computeMonthlySalary(salary:number):number
//     {
//         return salary/12;
//     }
// }    
