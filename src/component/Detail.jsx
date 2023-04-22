// src/components/TodoDetail.js
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Detail() {
	const { id } = useParams();
	const todos = useSelector((state) => state.todos.todos);
	const todo = todos.find((todo) => todo.id === parseInt(id));

	if (!todo) {
		return <div>Todo not found.</div>;
	}

	return (
		<div>
			<h2>Todo Detail</h2>
			<div>
				<strong>Title:</strong> {todo.title}
			</div>
			<div>
				<strong>Content:</strong> {todo.content}
			</div>
			<div>
				<strong>Status:</strong> {todo.isDone ? "Done" : "Not Done"}
			</div>
		</div>
	);
}

export default Detail;
