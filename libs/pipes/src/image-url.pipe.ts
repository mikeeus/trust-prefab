import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageUrl'
})
export class ImageUrlPipe implements PipeTransform {
  transform(value: any, prefix?: any): any {
    console.log('prefix: ', prefix);
    const _prefix = prefix ? `${prefix}/` : '';
    return `url(assets/images/${_prefix}${value})`;
  }
}
