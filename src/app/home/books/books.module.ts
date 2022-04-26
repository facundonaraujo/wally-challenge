import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { BooksRoutingModule } from './books-routing.module'
import { PipeModule } from '../../pipes/pipes.module'
import { TextWithValueComponent } from './text-with-value/text-with-value.component'

@NgModule({
  imports: [
    NativeScriptCommonModule,
    BooksRoutingModule,
    CommonModule,
    PipeModule
  ],
  declarations: [
    BooksComponent,
    BookDetailComponent,
    TextWithValueComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class BooksModule { }
