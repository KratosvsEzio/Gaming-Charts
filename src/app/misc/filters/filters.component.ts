import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';

import { DataService } from '@app/services/data.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  public _platforms: Observable<any>;
  public _genres: Observable<any>;

  public selectedGenre: string = '';
  public selectedPlatform: string = '';

  constructor(private dataSerivce: DataService) { }

  ngOnInit(): void {
    this.fetchPlatforms();
    this.fetchGenres();
    this.fetchGames();
  }

  fetchGames() {
    this.dataSerivce.selectTopByPlaytime(this.selectedPlatform, this.selectedGenre).subscribe();
    this.dataSerivce.selectTopByPlayers(this.selectedPlatform, this.selectedGenre).subscribe();
  }

  fetchPlatforms() {
    this._platforms = this.dataSerivce.platforms()
      .pipe(map((res: any) => res.data))
  }

  fetchGenres() {
    this._genres = this.dataSerivce.genres()
      .pipe(map((res: any) => res.data))
  }
}
