import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'languages'
})
export class LanguagesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
