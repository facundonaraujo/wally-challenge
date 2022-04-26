import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { BookDetailComponent } from './book-detail/book-detail.component'
import { BooksComponent } from './books.component'

const routes: Routes = [
  {
    path: '',
    component: BooksComponent
  },
  {
    path: 'book',
    component: BookDetailComponent
  }
]
  
@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class BooksRoutingModule {}
  