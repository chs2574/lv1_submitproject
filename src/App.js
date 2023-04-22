// App.js
import "./App.css";
import { useState } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	useNavigate,
} from "react-router-dom";
import Detail from "./component/Detail";
import Main from "./component/Main";
import { useSelector, useDispatch } from "react-redux";

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route
						exact
						path='/'
						element={<Main />}
					/>
					<Route
						path='/todo/:id'
						component={<Detail />}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
