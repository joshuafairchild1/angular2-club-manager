import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(input: Member[], nameFilter: string): Member[] {
    return nameFilter ? input.filter(member => member.name.toLowerCase().includes(nameFilter.toLowerCase())) : input;
  }

}
