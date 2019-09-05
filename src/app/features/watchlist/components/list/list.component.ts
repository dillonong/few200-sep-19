import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { WatchlistListItem } from '../../models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { WatchListState, selectWatchListItems } from '../../reducers';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush // ONLY watches the @Input
})
export class ListComponent implements OnInit {

  // items$: Observable<WatchlistListItem[]>;  -- Move to parent
  @Input() items: WatchlistListItem[];
  constructor(private store: Store<WatchListState>) { }

  ngOnInit() {
    // this.items$ = this.store.select(selectWatchListItems); -- MOVE to Parent
  }

}
