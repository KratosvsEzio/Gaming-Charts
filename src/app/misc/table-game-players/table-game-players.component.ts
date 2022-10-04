import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';

import { IGames } from '@app/lib/games';

import { DataService } from '@app/services/data.service';


@Component({
  selector: 'app-table-game-players',
  templateUrl: './table-game-players.component.html',
  styleUrls: ['./table-game-players.component.scss']
})
export class TableGamePlayersComponent implements OnInit {
  _gamesGroupByPlayer$: Observable<IGames[]>;

  constructor(private dataSerivce: DataService) { }

  ngOnInit(): void {
    this._gamesGroupByPlayer$ = this.dataSerivce.selectedGamesByPlayers;
  }

}
