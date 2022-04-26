import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ImagePipe } from './image.pipe'
import { TakeFirstElementPipe } from './takeFirstElement.pipe'

@NgModule({
    declarations: [		
        ImagePipe,
        TakeFirstElementPipe
    ],
    exports: [
        ImagePipe,
        TakeFirstElementPipe
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class PipeModule { }
  