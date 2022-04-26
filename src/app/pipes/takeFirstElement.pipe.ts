import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'takeFirstElement'
})
export class TakeFirstElementPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      if (Array.isArray(value) && value.length > 0) {
        return value[0];
      } else {
        return '';
      }
    } else {
      return '';
    }
  }

}
