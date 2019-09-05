import { Component, OnInit } from '@angular/core';
import { WatchlistListItem } from '../../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  items: WatchlistListItem[] = [
    { id: '1', title: 'Gilligan\'s Island' },
    { id: '2', title: 'Star Trek Discovery' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
