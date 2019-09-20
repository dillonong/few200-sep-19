import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutComponent } from './components/about/about.component';
import { NavComponent } from './components/nav/nav.component';
import { TodoModule } from './features/todo/todo.module';
import { CounterComponent } from './components/counter/counter.component';

// Store module - Dev tools is for Chrome extension to see the state data
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './effects/counter.effects';
import { WatchlistModule } from './features/watchlist/watchlist.module';
import { BooksModule } from './features/books/books.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutComponent,
    NavComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule,
    WatchlistModule,
    BooksModule,

    //  THIS is how the reducer is hooked up
    StoreModule.forRoot(reducers), // Creates our application state - forRoot because this is on the ROOT of the application (app.module)
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([CounterEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
