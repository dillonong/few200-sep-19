import { Component, OnInit } from '@angular/core';
import { ListDataService } from './services/list-data.service';
import { TodoListItem } from './models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  abc: TodoListItem;
  todoList$: Observable<TodoListItem[]>;
  // service: ListDataService;
  // constructor(service: ListDataService) {
  //   this.service = service;
  // } --- SIMPLIFIED to the following
  constructor(private service: ListDataService) { }

  ngOnInit() {
    // meaningful work getting the component ready goes here
    // this.server.getData().subscribe(stuff => {
    //   console.log('Got this from the service', stuff);
    //   this.todoList = stuff;
    // })
    this.todoList$ = this.service.getData();
  }

  addTodoItem(what: string) {
    this.service.add(what);
  }
}
