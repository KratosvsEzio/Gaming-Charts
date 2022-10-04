import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableGamePlaytimeComponent } from './table-game-playtime.component';

describe('TableGamePlaytimeComponent', () => {
  let component: TableGamePlaytimeComponent;
  let fixture: ComponentFixture<TableGamePlaytimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableGamePlaytimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableGamePlaytimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
