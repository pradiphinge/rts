/** @format */

import React, { useState } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const RepositoriesList: React.FC = () => {
	const [term, setTerm] = useState('');
	const { searchRepositories } = useActions();
	const { repos, error, loading } = useTypedSelector(
		(state) => state.repositories
	);
	console.log(repos);
	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTerm(event.target.value);
	};
	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		searchRepositories(term);
	};
	return (
		<div>
			<form onSubmit={onSubmit}>
				<input type='text' value={term} onChange={onChange} />
				<button type='submit'>Search</button>
				{error && <h3>{error}</h3>}
				{loading && <h3>Loading....</h3>}
				{!error &&
					!loading &&
					repos.map((repo) => <div key={repo}>{repo}</div>)}
			</form>
		</div>
	);
};

export default RepositoriesList;
