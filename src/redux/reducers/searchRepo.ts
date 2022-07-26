/** @format */
import { ActionType } from '../action-types';
import { Action } from '../actions';

interface searchRepoState {
	loading: boolean;
	repos: string[];
	error: string | null;
}

const initialState = {
	loading: false,
	error: null,
	repos: [],
};

const reducer = (
	state: searchRepoState = initialState,
	action: Action
): searchRepoState => {
	switch (action.type) {
		case ActionType.SEARCH_REPOS:
			return { loading: true, error: null, repos: [] };
		case ActionType.SEARCH_REPOS_SUCCESS:
			return { loading: false, error: null, repos: action.payload };
		case ActionType.SEARCH_REPOS_ERROR:
			return { loading: false, error: action.payload, repos: [] };
		default:
			return state;
	}
};
export default reducer;
