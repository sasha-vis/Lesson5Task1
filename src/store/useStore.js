import { useEffect, useState } from 'react';
import { ref, onValue, push, set, remove } from 'firebase/database';
import { db } from './firebase';

export const useStore = () => {
	const [tasksList, setTasksList] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const tasksDbRef = ref(db, 'tasks');

		return onValue(tasksDbRef, (snapshot) => {
			const loadedTasks = snapshot.val() || {};
			setTasksList(loadedTasks);
			setIsLoading(false);
		});
	}, []);

	const createTask = async (newTask) => {
		setIsLoading(true);

		const tasksDbRef = ref(db, 'tasks');

		try {
			await push(tasksDbRef, {
				title: newTask,
			});
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	};

	const editTask = async (taskId, editedTask) => {
		setIsLoading(true);

		const taskDbRef = ref(db, `tasks/${taskId}`);

		try {
			await set(taskDbRef, {
				title: editedTask,
			});
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	};

	const deleteTask = async (taskId) => {
		setIsLoading(true);

		const taskDbRef = ref(db, `tasks/${taskId}`);

		try {
			await remove(taskDbRef);
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
