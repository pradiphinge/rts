/** @format */
import { ActionType } from '../action-types';

interface SearchRepoAction {
	type: ActionType.SEARCH_REPOS;
}

interface SearchRepoSuccessAction {
	type: ActionType.SEARCH_REPOS_SUCCESS;
	payload: string[];
}

interface SearchRepoErrorAction {
	type: ActionType.SEARCH_REPOS_ERROR;
	payload: string;
}

export type Action =
	| SearchRepoAction
	| SearchRepoSuccessAction
	| SearchRepoErrorAction;
