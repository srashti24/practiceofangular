import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeePipe'
})
export class EmployeePipePipe implements PipeTransform {

  transform(value: string, gender: string): string {
    if (gender) {
      if (gender.toLowerCase() == 'male')
        return "mr." + value;
      return "miss." + value;
    }
    return gender
  }
}