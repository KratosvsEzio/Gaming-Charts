import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableGamePlayersComponent } from './table-game-players.component';

describe('TableGamePlayersComponent', () => {
  let component: TableGamePlayersComponent;
  let fixture: ComponentFixture<TableGamePlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableGamePlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableGamePlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
