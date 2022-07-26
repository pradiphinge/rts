/** @format */

import { combineReducers } from 'redux';
import searchRepoReducer from './searchRepo';

export const reducers = combineReducers({
	repositories: searchRepoReducer,
});

export type RootState = ReturnType<typeof reducers>;
