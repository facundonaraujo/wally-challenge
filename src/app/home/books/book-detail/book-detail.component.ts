import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { Subscription } from 'rxjs';
import { Book } from '~/app/models/book.model';
import { BookService } from '~/app/services/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit, OnDestroy  {

  book: Book
  showMore: boolean = false;
  bookSubscribe: Subscription;

  constructor(
    private bookService: BookService,
    private router: RouterExtensions,
  ) {}

  ngOnInit(): void {
    this.bookSubscribe = this.bookService.book.subscribe({
      next: (resp) => {
        if (resp) {
          this.book = resp;
        }
      }
    });
  }

  onTapShowMore(){
    this.showMore = !this.showMore;
  }

  return(){
    this.router.navigate(['/home/books']);
  }

  ngOnDestroy(): void {
    this.bookSubscribe?.unsubscribe();
  }

}
