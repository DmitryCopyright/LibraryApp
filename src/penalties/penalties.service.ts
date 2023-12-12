import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Penalty } from '../models/penalty.model';

@Injectable({
  providedIn: 'root'
})
export class PenaltyService {
  private apiUrl = 'http://your-api-url/penalties';

  constructor(private http: HttpClient) {}

  getPenalties(): Observable<Penalty[]> {
    return this.http.get<Penalty[]>(this.apiUrl);
  }

  getPenaltyById(penaltyId: number): Observable<Penalty> {
    return this.http.get<Penalty>(`${this.apiUrl}/${penaltyId}`);
  }

  createPenalty(penalty: Penalty): Observable<Penalty> {
    return this.http.post<Penalty>(this.apiUrl, penalty);
  }

  updatePenalty(penaltyId: number, penalty: Penalty): Observable<Penalty> {
    return this.http.put<Penalty>(`${this.apiUrl}/${penaltyId}`, penalty);
  }

  deletePenalty(penaltyId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${penaltyId}`);
  }
}
