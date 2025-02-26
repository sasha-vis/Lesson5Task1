import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ToDoList } from './to-do-list';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ToDoList />
	</React.StrictMode>,
);
