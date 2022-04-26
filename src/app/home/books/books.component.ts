import { Observable, Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { Application } from '@nativescript/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { Book } from '~/app/models/book.model';
import { BookService } from '~/app/services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit, OnDestroy {

  books: Array<Book>;
  loadingBooks: boolean = true;
  booksSubscribe: Subscription;

  constructor(
    private bookService: BookService,
    private router: RouterExtensions,
  ) {}

  ngOnInit(): void {
    this.booksSubscribe = this.bookService.getBooks().subscribe({
      next: (booksResponse) => {
        this.loadingBooks = false;
        this.books = booksResponse?.items;
      },
      error: (err) => {
        this.loadingBooks = false;
        console.log('err', err);
      }
    });
  }

  public onTapBook(book: Book) {
    this.bookService.onSetBook(book);
    this.router.navigate(['/home/books/book']);
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

  ngOnDestroy(): void {
    this.booksSubscribe?.unsubscribe();
  }

}
