import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../../models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { BooksListState, selectBooks } from '../../reducers';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush // ONLY watches the @Input
})
export class ListComponent implements OnInit {

  // items$: Observable<WatchlistListItem[]>;  -- Move to parent
  @Input() items: Book[];
  constructor(private store: Store<BooksListState>) { }

  ngOnInit() {
    //this.items = this.store.select(selectBooks); //-- MOVE to Parent
    //items =
  }

}
