import { Pipe, PipeTransform } from '@angular/core';
import { DateTime } from 'luxon';


@Pipe({
  name: 'endtime'
})
export class EndtimePipe implements PipeTransform {

  transform(value: number): unknown {
    return DateTime.now().plus({ minutes: value }).toFormat('HH\'h\'mm')
  }

}
