import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
	const [list, setList] = useState([
		"react를 배워봅시다.",
		"useState를 배워봅시다.",
		"자바스크립트를 배워봅시다.",
	]);
	const [value, setValue] = useState("");
	const inputhandler = (event) => {
		setValue(event.target.value);
	};
	const addlist = () => {
		let copy = [...list];
		copy.push(value);
		setList(copy);
	};
	return (
		<div className='App'>
			<div className='input'>
				<input onChange={inputhandler} />
				<button onClick={addlist}>추가하기</button>
			</div>
			<h1>Todo List</h1>
			<div className='to-dolist'>
				{list.map((a, i) => {
					return (
						<div
							className='list'
							key={i}>
							{a}
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default App;
