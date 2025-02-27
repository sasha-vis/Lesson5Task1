import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyDxWNG2SVZxTCmLmtx7cev1qdP1VDTGqvA',
	authDomain: 'to-do-list-6fe17.firebaseapp.com',
	projectId: 'to-do-list-6fe17',
	storageBucket: 'to-do-list-6fe17.firebasestorage.app',
	messagingSenderId: '627304701033',
	appId: '1:627304701033:web:cd0963adf36117df4cd6f8',
	databaseURL:
		'https://to-do-list-6fe17-default-rtdb.europe-west1.firebasedatabase.app/',
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
