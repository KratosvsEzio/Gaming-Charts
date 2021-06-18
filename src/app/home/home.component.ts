import { DataService } from './../core/service/data.service';
import { Component, OnInit } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';
import { Observable, pipe } from 'rxjs';
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
    this.gamesGroupByPlaytime$ = this.dataSerivce.select_top_by_playtime(this.platform, this.genre).pipe( map( (res: any) => res.data));
    this.gamesGroupByPlayer$ = this.dataSerivce.select_top_by_players(this.platform, this.genre).pipe( map( (res: any) => res.data));
    // this.select_top_by_players();
    // this.select_top_by_playtime();
  }

  // select_top_by_playtime() {
  //   this.gamesGroupByPlaytime$ = this.games.pipe(
  //     map( (res: any) => {
  //       // Filter games array in decending order according to game playtime.
  //       return res.data = res.data.sort(function (a, b) {
  //         return b.totalPlayTime - a.totalPlayTime;
  //       });
  //     })
  //   )
  // }

  // select_top_by_players() {
  //   this.gamesGroupByPlayer$ = this.games.pipe(
  //     map( (res: any) => {
  //       // Filter games array in decending order according to game playtime.
  //       return res.data = res.data.sort(function (a, b) {
  //         return b.totalPlayers - a.totalPlayers;
  //       });
  //     })
  //   )
  // }

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
