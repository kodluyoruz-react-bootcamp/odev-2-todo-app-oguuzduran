import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

function App() {
	const [todoList, setTodoList] = useState([
		{ id: 1, todo: 'görev 1', active: true },
		{ id: 2, todo: 'görev 2', active: true },
	]);

	const [oldTodoList, setOldTodoList] = useState([]);

	const addTodoItem = (item) => {
		item.preventDefault();
		let itemData = item.target.elements.todoitem.value;

		setTodoList([
			...todoList,
			{
				id: todoList.length > 0 ? todoList[todoList.length - 1].id + 1 : 0,
				todo: itemData,
				active: true,
			},
		]);

		if (oldTodoList.length > 0) {
			setOldTodoList([
				...oldTodoList,
				{
					id: todoList.length > 0 ? todoList[todoList.length - 1].id + 1 : 0,
					todo: itemData,
					active: true,
				},
			]);
		}

		item.target.elements.todoitem.value = '';
	};

	const removeTodoItem = (todo) => {
		if (oldTodoList.length > 0) {
			const items = oldTodoList.filter((item) => item.id !== todo);
			setOldTodoList(items);
		}

		const items = todoList.filter((item) => item.id !== todo);
		setTodoList(items);
	};

	const deactiveTodoItem = (todo) => {
		for (let i = 0; i < todoList.length; i++) {
			if (todo === todoList[i].id) {
				todoList[i].active = !todoList[i].active;
				setTodoList([...todoList]);
			}
		}
	};

	const filterActive = () => {
		let items;
		if (oldTodoList.length > 0) {
			items = oldTodoList.filter((item) => item.active === true);
		} else {
			items = todoList.filter((item) => item.active === true);
			setOldTodoList([...todoList]);
		}
		setTodoList(items);
	};

	const filterCompleted = () => {
		let items;
		if (oldTodoList.length > 0) {
			items = oldTodoList.filter((item) => item.active === false);
		} else {
			items = todoList.filter((item) => item.active === false);
			setOldTodoList([...todoList]);
		}
		setTodoList(items);
	};

	const filterAll = () => {
		if (oldTodoList.length > 0) {
			setTodoList([...oldTodoList]);
			setOldTodoList([]);
		} else {
			setTodoList([...todoList]);
		}
	};

	const clearItems = () => {
		if (oldTodoList.length > 0) {
			const items = oldTodoList.filter((item) => item.active !== false);
			setOldTodoList(items);
		}

		const items = todoList.filter((item) => item.active !== false);
		setTodoList(items);
	};

	return (
		<>
			<section className="todoapp">
				<Header addItem={addTodoItem} />
				<Main
					todoList={todoList}
					removeTodoItem={removeTodoItem}
					deactiveTodoItem={deactiveTodoItem}
				/>
				<Footer
					todoLength={todoList.length}
					filterActive={filterActive}
					filterAll={filterAll}
					filterCompleted={filterCompleted}
					clearItems={clearItems}
				/>
			</section>

			<footer className="info">
				<p>Ödev 2</p>
			</footer>
		</>
	);
}

export default App;
