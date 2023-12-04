import { ref, push } from 'firebase/database';
import { todosDB } from '../firebase';
//new element option
export const MakeRawTodo = () => {
	const todosDbRef = ref(todosDB, `todos`) || [];
	push(todosDbRef, {
		todo: `Новая заметка`,
	});
};
