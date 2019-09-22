import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { BooksComponent } from './books.component';
import { ListEffects } from './effects/list.effect';
import { EntryComponent } from './components/entry/entry.component';


@NgModule({
  declarations: [BooksComponent, ListComponent, EntryComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(featureName, reducers),
    EffectsModule.forFeature([ListEffects]),
    HttpClientModule
  ],
  exports: [BooksComponent]
})
export class BooksModule { }
