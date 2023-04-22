import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, deleteTodo, addTodo } from "../redux/modules/mylist";

function Main() {
	const todos = useSelector((state) => state.todos.todos);
	const dispatch = useDispatch();

	const notDoneTodos = todos.filter((todo) => !todo.isDone);
	const doneTodos = todos.filter((todo) => todo.isDone);

	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const handleAddTodo = () => {
		dispatch(addTodo(title, content));
		setTitle("");
		setContent("");
	};

	return (
		<div>
			<div>
				<input
					placeholder='제목'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<input
					placeholder='내용'
					value={content}
					onChange={(e) => setContent(e.target.value)}
				/>
				<button onClick={handleAddTodo}>추가하기</button>
			</div>
		</div>
	);
}

export default Main;
