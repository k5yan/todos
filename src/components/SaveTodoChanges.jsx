import { ref, set } from 'firebase/database';
import { todosDB } from '../firebase';
//edit option
export const SaveTodoChanges = (id, todoText) => {
	const todosDbRef = ref(todosDB, `todos/${id}`) || [];
	set(todosDbRef, {
		todo: `${todoText}`,
	});
};
