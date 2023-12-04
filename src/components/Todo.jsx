import { useState } from 'react';
import styles from '../styles/TodoStyle.module.css';
import { SaveTodoChanges } from './SaveTodoChanges';
import { DeleteTodo } from './DeleteTodo';

export const Todo = ({ id, todo }) => {
	const [todoText, setTodoText] = useState(todo);

	const todoChange = ({ target }) => setTodoText(target.value);

	return (
		<div key={id} className={styles.todoContainer}>
			<input type="checkbox" className={styles.todoCheckbox}></input>
			<div className={styles.todoTextareaContainer}>
				<span className={styles.spanStyle}>{todoText}</span>
				<textarea
					className={styles.todoText}
					value={todoText}
					onChange={todoChange}
					onBlur={() => SaveTodoChanges(id, todoText)}
				></textarea>
			</div>
			<button
				className={styles.todoDelete}
				onClick={() => {
					DeleteTodo(id);
				}}
			>
				<span> ✖ </span>
			</button>
		</div>
	);
};
