import { ToDoListLayout } from './to-do-list-layout';
import { useStore } from './store/useStore';
import { useState } from 'react';

export const ToDoList = () => {
	const { tasksList, isLoading, createTask, editTask, deleteTask } = useStore();
	const [isSorted, setIsSorted] = useState(false);
	const [searchValue, setSearchValue] = useState('');

	const filteredTasks = tasksList.filter((task) =>
		task.title.toLowerCase().includes(searchValue.toLowerCase()),
	);

	const displayedTasks = isSorted
		? filteredTasks.sort((a, b) => a.title.localeCompare(b.title))
		: filteredTasks;

	const handleCreate = () => {
		const taskText = prompt('Создайте задачу');
		if (taskText?.trim().length) createTask(taskText);
	};

	const handleEdit = ({ target }) => {
		const taskElement = target.closest('li');
		const taskText = taskElement.querySelector('span').textContent;

		const newTaskText = prompt('Редактирование задачи', taskText);

		if (newTaskText && newTaskText.trim().length) {
			editTask(taskElement.id, newTaskText);
		}
	};

	const handleDelete = ({ target }) => {
		const isConfirm = window.confirm('Удалить задачу?');
		if (isConfirm) deleteTask(target.closest('li').id);
	};

	return (
		<ToDoListLayout
			tasksList={displayedTasks}
			isLoading={isLoading}
			handleCreate={handleCreate}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
			toggleSort={() => setIsSorted((prev) => !prev)}
			isSorted={isSorted}
			searchValue={searchValue}
			setSearchValue={setSearchValue}
		/>
	);
};
