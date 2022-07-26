/** @format */

import { isInaccessible } from '@testing-library/react';
import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';

export const searchRepositories = (term: string) => {
	return async (dispatch: Dispatch<Action>) => {
		dispatch({ type: ActionType.SEARCH_REPOS });
		try {
			const { data } = await axios.get(
				'https://registry.npmjs.org/-/v1/search',
				{
					params: {
						text: term,
					},
				}
			);
			const names = data.objects.map((object: any) => object.package.name);
			dispatch({
				type: ActionType.SEARCH_REPOS_SUCCESS,
				payload: names,
			});
		} catch (error) {
			if (error instanceof Error) {
				dispatch({
					type: ActionType.SEARCH_REPOS_ERROR,
					payload: error.message,
				});
			}
		}
	};
};
