import { ToDoListLayout } from './to-do-list-layout';
import { useStore } from './store/useStore';

export const ToDoList = () => {
	const { tasksList, isLoading } = useStore();

	return <ToDoListLayout tasksList={tasksList} isLoading={isLoading} />;
};
