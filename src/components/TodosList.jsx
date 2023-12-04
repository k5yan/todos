import { useEffect, useState } from 'react';
import styles from '../styles/TodoStyle.module.css';
import { ref, onValue } from 'firebase/database';
import { todosDB } from '../firebase';
import { Todo } from './Todo';
import { MakeRawTodo } from './MakeRawTodo';

export const TodosList = () => {
	const [todos, setTodos] = useState({});

	useEffect(() => {
		const todosDbRef = ref(todosDB, 'todos') || [];
		return onValue(todosDbRef, (snapshot) => {
			const loadedTodos = snapshot.val();
			setTodos(loadedTodos);
		});
	}, []);
	return (
		<div className={styles.appContainer}>
			<div className={styles.listContainer}>
				{Object.entries(todos)
					.reverse()
					.map(([id, { todo }]) => (
						<Todo key={id} id={id} todo={todo} />
					))}
			</div>
			<button className={styles.todoAddButton} onClick={() => MakeRawTodo()}>
				<span> + </span>
			</button>
		</div>
	);
};
