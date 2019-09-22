export const featureName = 'booksFeature';
import * as fromList from './list.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as models from '../models';

export interface BooksListState {
  list: fromList.ListState;
}

export const reducers = {
  list: fromList.reducer
};

// Selectors
// 1. Feature Selector
const selectFeature = createFeatureSelector<BooksListState>(featureName);

// 2. Selector per branch for the feature state
const selectListBranch = createSelector(selectFeature, f => f.list);

// 3. Optional helper
const { selectAll: selectAllListEntities } = fromList.adapter.getSelectors(selectListBranch);

// 4. What the components need.
export const selectBooks = createSelector(selectAllListEntities, e => e as models.Book[]);

