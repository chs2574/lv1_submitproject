const DELETE_TODO = "todo_list/DELETE_TODO";
const ADD_TODO = "todo_list/ADD_TODO";
const TOGGLE_TODO = "todo_list/TOGGLE_TODO";

export const deleteTodo = (id) => ({
	type: DELETE_TODO,
	payload: { id },
});

export const addTodo = (title, content) => ({
	type: ADD_TODO,
	payload: { title, content },
});

export const toggleTodo = (id) => ({
	type: TOGGLE_TODO,
	payload: { id },
});

const initialState = {
	todo_list: [
		{
			id: 0,
			title: "예제1번의 제목",
			content: "예제1번의 내용",
			isdone: false,
		},
		{
			id: 1,
			title: "예제1번의 제목",
			content: "예제1번의 내용",
			isdone: false,
		},
		{
			id: 2,
			title: "예제1번의 제목",
			content: "예제1번의 내용",
			isdone: false,
		},
	],
};

export default function todolist(state = initialState, action) {
	switch (action.type) {
		case DELETE_TODO:
			return {
				...state,
				todo_list: state.todo_list.filter(
					(todo) => todo.id !== action.payload.id
				),
			};
		case ADD_TODO:
			const newTodo = {
				id: state.todo_list.length + 1,
				title: action.payload.title,
				content: action.payload.content,
				isdone: false,
			};
			return { ...state, todo_list: [...state.todo_list, newTodo] };
		case TOGGLE_TODO:
			return {
				...state,
				todo_list: state.todo_list.map((todo) =>
					todo.id === action.payload.id
						? { ...todo, isDone: !todo.isDone }
						: todo
				),
			};
		default:
			return state;
	}
}
