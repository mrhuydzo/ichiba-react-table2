import React from "react";
import "./styles/main.css";
import "./styles/fontawesome-pro/css/all.css";
import {Table} from "./components/table";
import {rows} from "./components/mockdata/data";
import {columns} from "./components/mockdata/data";



function App() {
	return (
		<div className="App">
			<div className="container">
				<div className="py-4">
					<h1 className="text-3xl"><strong>Table</strong></h1>
					<h2 className="text-gray-400">Sorting, Filtering, Pagination</h2>
				</div>
				<hr/>
				<Table rows={rows} columns={columns}/>
			</div>
		</div>
	);
}

export default App;
