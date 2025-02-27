import styles from './task.module.css';

export const TaskLayout = ({ id, value, handleEdit, handleDelete }) => {
	return (
		<li className={styles.task} id={id}>
			<div className={styles.content}>
				<span>{value}</span>
				<div className={styles.controllers}>
					<button className={styles.edit} onClick={handleEdit}>
						Edit
					</button>
					<button className={styles.delete} onClick={handleDelete}>
						Delete
					</button>
				</div>
			</div>
		</li>
	);
};
