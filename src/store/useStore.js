import { useEffect, useState } from 'react';
import { TASK_LIST_URL } from './../constants';

export const useStore = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [tasksList, setTasksList] = useState([]);

	useEffect(() => {
		setIsLoading(true);
		fetch(TASK_LIST_URL)
			.then((response) => response.json())
			.then((data) => setTasksList(data))
			.finally(() => setIsLoading(false));
	}, []);

	return { tasksList, isLoading };
};
