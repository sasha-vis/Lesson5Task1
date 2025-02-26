import styles from './task.module.css';

export const TaskLayout = ({ id, value }) => {
	return (
		<li className={styles.task} id={id}>
			{value}
		</li>
	);
};
