import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notDefined'
})
export class NotDefinedPipe implements PipeTransform {

  transform(value: string|null|undefined, defaultValue: string = 'not defined'): string {
    return value ?? defaultValue;
  }

}
