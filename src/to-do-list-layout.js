import styles from './to-do-list.module.css';
import { Task } from './components';

export const ToDoListLayout = ({ tasksList, isLoading }) => {
	return (
		<div className={styles.toDoList}>
			<h1 className={styles.title}>Список задач:</h1>
			{isLoading && <div className={styles.loader}>Загрузка задач...</div>}
			{!isLoading && (
				<ol className={styles.list}>
					{tasksList.map((listItem, index) => (
						<Task key={index} id={listItem.id} value={listItem.title} />
					))}
				</ol>
			)}
		</div>
	);
};
