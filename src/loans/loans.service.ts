import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs'
import { Loan } from '../models/loan.model';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  private apiUrl = 'http://your-api-url/loans'; // Замените на URL вашего API

  constructor(private http: HttpClient) { }

  getLoans(): Observable<Loan[]> {
    return this.http.get<Loan[]>(this.apiUrl).pipe(
      catchError(this.handleError<Loan[]>('getLoans', []))
    );

  }

  getLoanById(loanId: number): Observable<Loan> {
    return this.http.get<Loan>(`${this.apiUrl}/${loanId}`).pipe(
      catchError(this.handleError<Loan>(`getLoanById id=${loanId}`))
    );
  }

  createLoan(newLoan: Loan): Observable<Loan> {
    return this.http.post<Loan>(this.apiUrl, newLoan).pipe(
      catchError(this.handleError<Loan>('createLoan'))
    );
  }

  updateLoan(loanId: number, updatedLoan: Loan): Observable<Loan> {
    return this.http.put<Loan>(`${this.apiUrl}/${loanId}`, updatedLoan).pipe(
      catchError(this.handleError<Loan>('updateLoan'))
    );
  }

  deleteLoan(loanId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${loanId}`).pipe(
      catchError(this.handleError<any>('deleteLoan'))
    );
  }

  // Метод для обработки ошибок
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
