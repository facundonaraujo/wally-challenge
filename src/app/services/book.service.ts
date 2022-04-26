import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BooksResponse, Book } from '../models/book.model'

@Injectable()
export class BookService {
    private API_URL: string = 'https://www.googleapis.com/books/v1/';
    private API_KEY: string = 'AIzaSyCG_Ek4zvn3CssGMv7oo-0Sd2Us344R-u4';

    private headers = new HttpHeaders({
        'Content-Type': 'application/json',
    });

    private setBook = new BehaviorSubject<Book>(null);
    book = this.setBook.asObservable();

    constructor(
        private http: HttpClient
    ) {}

    getBooks(): Observable<BooksResponse | any>{
        let url = `${this.API_URL}volumes?q=stephen-king-libros&key=${this.API_KEY}&maxResults=35`;
        return this.http.get(url, {headers: this.headers});
    }

    onSetBook(book: Book) {
        this.setBook.next(book);
    }
}
