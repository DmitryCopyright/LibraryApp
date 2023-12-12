import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookModel } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'http://your-api-url/books'; //  URL нашего API

  constructor(private http: HttpClient) { }

  getBooks(): Observable<BookModel[]> {
    return this.http.get<BookModel[]>(this.apiUrl);
  }

  getBookById(id: number): Observable<BookModel> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<BookModel>(url);
  }

  addBook(book: BookModel): Observable<BookModel> {
    return this.http.post<BookModel>(this.apiUrl, book);
  }

  updateBook(id: number, book: BookModel): Observable<BookModel> {
    // Этот метод обновляет существующую книгу, используя PUT запрос
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<BookModel>(url, book);
  }

  deleteBook(id: number): Observable<any> {
    // Этот метод удаляет книгу по ID с использованием DELETE запроса
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}

