import { Component } from '@angular/core';
// Component is a func defined in angular/core
@Component(
  {
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
  }
)
export class DashboardComponent {
  message = 'Coming soon!';
}
