import styles from './to-do-list.module.css';
import { Task } from './components';

export const ToDoListLayout = ({
	tasksList,
	isLoading,
	handleCreate,
	handleEdit,
	handleDelete,
	toggleSort,
	isSorted,
	searchValue,
	setSearchValue,
}) => {
	return (
		<div className={styles.toDoList}>
			<h1 className={styles.title}>Список задач:</h1>
			<button className={styles.button} onClick={handleCreate}>
				Создать задачу
			</button>
			<div className={styles.controllers}>
				<input
					className={styles.input}
					value={searchValue}
					onChange={({ target }) => setSearchValue(target.value)}
				/>
				<button
					onClick={toggleSort}
					className={`${styles.sortBtn} ${isSorted && styles.sortActive}`.trim()}
				>
					Сортировать
				</button>
			</div>
			{isLoading ? (
				<div className={styles.loader}>Загрузка задач...</div>
			) : !tasksList.length ? (
				<div className={styles.noTasks}>Задач не найдено</div>
			) : (
				<ol className={styles.list}>
					{tasksList.map(([id, { title }]) => (
						<Task
							key={id}
							id={id}
							value={title}
							handleEdit={handleEdit}
							handleDelete={handleDelete}
						/>
					))}
				</ol>
			)}
		</div>
	);
};
