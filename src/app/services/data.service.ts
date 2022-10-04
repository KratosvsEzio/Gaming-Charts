import { BehaviorSubject, Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ISelectTop } from '@app/lib/select-top';
import { IGames } from '@app/lib/games';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'https://aashir-azeem-game-chart-be.netlify.app/.netlify/functions/app'; // Netlify api url
  // private apiUrl = 'http://localhost:9000/.netlify/functions/app/'; // Localhost api url

  private _selectedGamesByPlaytime: BehaviorSubject<IGames[]> = new BehaviorSubject([]);
  private _selectedGamesByPlayers: BehaviorSubject<IGames[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) { }

  public get selectedGamesByPlaytime(): Observable<IGames[]> {
    return this._selectedGamesByPlaytime.asObservable();
  }

  public get selectedGamesByPlayers(): Observable<IGames[]> {
    return this._selectedGamesByPlayers.asObservable();
  }

  public selectTopByPlaytime(platform, genre) {
    return this.http
      .get<ISelectTop>(`${this.apiUrl}/select_top_by_playtime?genre=${genre}&platform=${platform}`)
      .pipe(
        tap((res: ISelectTop) => this._selectedGamesByPlaytime.next(res.data)),
        shareReplay()
      );
  }

  public selectTopByPlayers(platform, genre) {
    return this.http.get<ISelectTop>(`${this.apiUrl}/select_top_by_players?genre=${genre}&platform=${platform}`)
      .pipe(
        tap((res: ISelectTop) => this._selectedGamesByPlayers.next(res.data)),
        shareReplay()
      );
  }

  public platforms() {
    return this.http.get(`${this.apiUrl}/platforms`);
  }

  public genres() {
    return this.http.get(`${this.apiUrl}/genres`);
  }
}
