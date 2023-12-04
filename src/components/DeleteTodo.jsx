import { ref, remove } from 'firebase/database';
import { todosDB } from '../firebase';
//delete element option
export const DeleteTodo = (id) => {
	const todosDbRef = ref(todosDB, `todos/${id}`) || [];
	remove(todosDbRef);
};
