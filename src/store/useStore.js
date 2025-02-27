import { useEffect, useState } from 'react';
import { TASK_LIST_URL } from './../constants';

export const useStore = () => {
	const [tasksList, setTasksList] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		fetch(TASK_LIST_URL)
			.then((response) => response.json())
			.then((data) => setTasksList(data))
			.catch((error) => console.error('Ошибка при загрузке задач:', error))
			.finally(() => setIsLoading(false));
	}, []);

	const createTask = async (newTask) => {
		setIsLoading(true);
		try {
			const response = await fetch(TASK_LIST_URL, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json;charset=utf-8' },
				body: JSON.stringify({ title: newTask }),
			});

			if (!response.ok) throw new Error('Ошибка при создании задачи');

			const data = await response.json();
			setTasksList((prev) => [...prev, data]);
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	};

	const editTask = async (taskId, editedTask) => {
		setIsLoading(true);
		try {
			const response = await fetch(`${TASK_LIST_URL}/${taskId}`, {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json;charset=utf-8' },
				body: JSON.stringify({ title: editedTask }),
			});

			if (!response.ok) throw new Error('Ошибка при редактировании задачи');

			const updatedTask = await response.json();
			setTasksList((prev) =>
				prev.map((task) => (task.id === updatedTask.id ? updatedTask : task)),
			);
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	};

	const deleteTask = async (taskId) => {
		setIsLoading(true);
		try {
			const response = await fetch(`${TASK_LIST_URL}/${taskId}`, {
				method: 'DELETE',
			});

			if (!response.ok) throw new Error('Ошибка при удалении задачи');

			setTasksList((prev) => prev.filter((task) => task.id !== parseInt(taskId)));
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	};

	return {
		tasksList,
		isLoading,
		createTask,
		editTask,
		deleteTask,
	};
};
