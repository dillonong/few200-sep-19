import { Component, OnInit } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { BooksListState } from '../../reducers';
import { bookAdded } from '../../actions/list.actions';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor(private store: Store<BooksListState>) { }

  ngOnInit() {
  }

  add(bookEl: HTMLInputElement) {
    this.store.dispatch(bookAdded({ title: bookEl.value }));
    bookEl.value = '';
    bookEl.focus();
  }
}
