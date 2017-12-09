import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageUrl'
})
export class ImageUrlPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return `url(assets/images/${value})`;
  }
}
