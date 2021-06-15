import { DataService } from './../core/service/data.service';
import { Component, OnInit } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Games } from '../models/games'
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  platforms: any = [];
  genres: any = [];

  // ng model
  platform: string = '';
  genre: string = '';

  games: Observable<any>
  gamesGroupByPlaytime$: Observable<Games[]>;
  gamesGroupByPlayer$: Observable<Games[]>;

  constructor(private dataSerivce: DataService) { }

  ngOnInit(): void {
    this.fetchPlatforms();
    this.fetchGenres();
    this.fetchGames();
  }

  fetchGames() {
    console.log('fetch games')
    this.games = this.dataSerivce.fetchGames(this.platform, this.genre);
    this.select_top_by_playtime();
    this.select_top_by_players();
  }

  select_top_by_playtime() {
    this.gamesGroupByPlaytime$ = this.games.pipe(
      map( (res: any) => {
        // Filter games array in decending order according to game playtime.
        return res.data = res.data.sort(function (a, b) {
          return b.totalPlayTime - a.totalPlayTime;
        });
      }),
      shareReplay(),
    )
  }

  select_top_by_players() {
    this.gamesGroupByPlayer$ = this.games.pipe(
      map( (res: any) => {
        // Filter games array in decending order according to game playtime.
        return res.data = res.data.sort(function (a, b) {
          return b.totalPlayers - a.totalPlayers;
        });
      }),
      shareReplay(),
    )
  }

  fetchPlatforms() {
    this.dataSerivce.platforms().subscribe( (res: any) => {
      if(res.code === 200) {
        console.log('Result', res)
        this.platforms = res.data;
      }
    })
  }

  fetchGenres() {
    this.dataSerivce.genres().subscribe( (res: any) => {
      if(res.code === 200) {
        console.log('Result', res)
        this.genres = res.data;
      }
    })
  }

}
