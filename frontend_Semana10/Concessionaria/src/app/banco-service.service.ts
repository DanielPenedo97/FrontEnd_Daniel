// banco-service.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BancoService {

  constructor(private http: HttpClient) { }

  addItem(itemData: any): Observable<any> {
    // Assuming your API endpoint for adding items is '/api/items'
    return this.http.post<any>('/api/items', itemData);
  }

  getItems(): Observable<any[]> {
    // Assuming your API endpoint for fetching items is '/api/items'
    return this.http.get<any[]>('/api/items');
  }
}
