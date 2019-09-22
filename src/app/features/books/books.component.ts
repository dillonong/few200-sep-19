import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { BooksListState, selectBooks } from './reducers';
import { Book } from './models';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  items$: Observable<Book[]>;
  constructor(private store: Store<BooksListState>) { }

  ngOnInit() {
    this.items$ = this.store.select(selectBooks);
  }

}
