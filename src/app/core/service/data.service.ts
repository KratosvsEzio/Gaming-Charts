import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Games } from '../../models/games'
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://localhost:9000/.netlify/functions/app/'; // Netlify api url
  // private apiUrl = 'http://localhost:8000/'; // Localhost api url

  constructor(private http: HttpClient) { }

  fetchGames(platform, genre) {
    return this.http.get<{code: number, data:Games[], message: string}>(`${this.apiUrl}select_top_by_playtime?genre=${genre}&platform=${platform}`).pipe(
      shareReplay()
    );
  }

  platforms() {
    return this.http.get(`${this.apiUrl}platforms`);
  }

  genres() {
    return this.http.get(`${this.apiUrl}genres`);
  }
}
