import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { FiltersComponent } from '@app/misc/filters/filters.component'
import { TableGamePlayersComponent } from '@app/misc/table-game-players/table-game-players.component';
import { TableGamePlaytimeComponent } from '@app/misc/table-game-playtime/table-game-playtime.component';

const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
    FiltersComponent,
    TableGamePlaytimeComponent,
    TableGamePlayersComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class HomeModule { }
