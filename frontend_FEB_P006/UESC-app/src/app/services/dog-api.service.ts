// dog-api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogApiService {

  constructor(private http: HttpClient) { }

  getDogImages(): Observable<any> {
    const apiKey = 'live_GlHIUBUuU5kODfW7cYGb7pq7vL1sNhm6YbkzQFjr0w1msaSd7k6zHn6rFo8x21Yw';
    return this.http.get(`https://api.thedogapi.com/v1/images/search?api_key=${apiKey}`);
  }
}
