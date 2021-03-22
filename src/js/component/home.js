import React, { useState } from "react";
import shortid from "shortid";

//create your first component
export function Home() {
	const [todo, setTodo] = useState("");
	const [arrayTodos, setArrayTodos] = useState([]);

	let pendingTodo = arrayTodos.length;

	const delet = uniqueId => {
		let itemDelet = arrayTodos.filter(item => {
			return item.id !== uniqueId;
		});
		setArrayTodos(itemDelet);
	};

	const addTodo = e => {
		e.preventDefault();
		setArrayTodos([
			...arrayTodos,
			{
				id: shortid.generate(),
				nameTodo: todo
			}
		]);
		setTodo("");
	};

	return (
		<div className="container bg-light">
			<div className="row vh-100 align-items-center">
				<div className="todo bg-white">
					<header className="header">
						<h1>todos</h1>
						<form onSubmit={addTodo}>
							<input
								placeholder="What needs to be done?"
								onChange={e => setTodo(e.target.value)}
								value={todo}
							/>
						</form>
					</header>
					<section>
						{pendingTodo === 0 ? (
							<p>There are no pending to do list</p>
						) : (
							arrayTodos.map(item => (
								<div key={item.id}>
									<p>
										{item.nameTodo}{" "}
										<i
											onClick={() => {
												delet(item.id);
											}}
											className="fas fa-trash"></i>
									</p>
								</div>
							))
						)}
					</section>
					<footer className="footer">
						<p>{pendingTodo} Item Left</p>
					</footer>
				</div>
			</div>
		</div>
	);
}
