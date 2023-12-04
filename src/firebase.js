import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyDnygc9HNjVJYpcAmPXVgS8dPgGmgxyTh0',
	authDomain: 'todosproject-acada.firebaseapp.com',
	projectId: 'todosproject-acada',
	storageBucket: 'todosproject-acada.appspot.com',
	messagingSenderId: '700697890524',
	appId: '1:700697890524:web:d93b0b45836cf8f7902e19',
	databaseURL:
		'https://todosproject-acada-default-rtdb.europe-west1.firebasedatabase.app/',
};

const app = initializeApp(firebaseConfig);

export const todosDB = getDatabase(app);
