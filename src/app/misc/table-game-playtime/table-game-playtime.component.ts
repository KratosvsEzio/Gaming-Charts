import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';

import { DataService } from '@app/services/data.service';

import { IGames } from '@app/lib/games';

@Component({
  selector: 'app-table-game-playtime',
  templateUrl: './table-game-playtime.component.html',
  styleUrls: ['./table-game-playtime.component.scss']
})
export class TableGamePlaytimeComponent implements OnInit {
  _gamesGroupByPlaytime$: Observable<IGames[]>;

  constructor(private dataSerivce: DataService) { }

  ngOnInit(): void {
    this._gamesGroupByPlaytime$ = this.dataSerivce.selectedGamesByPlaytime;
  }

}
