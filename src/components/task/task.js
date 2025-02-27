import { TaskLayout } from './task-layout';

export const Task = ({ id, value, handleEdit, handleDelete }) => {
	return (
		<TaskLayout
			id={id}
			value={value}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
		/>
	);
};
