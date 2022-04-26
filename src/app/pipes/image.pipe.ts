import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ImageTransform'
})
export class ImagePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      let url = value.replace('http', 'https');
      return url;
    } else {
      return 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png';
    }
  }

}
