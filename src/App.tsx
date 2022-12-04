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
					<h2 className="text-gray-500">Sorting, Filtering, Pagination</h2>
				</div>
				<hr/>
				<Table
					rows={rows} // Data Array
					columns={columns} // Include object columns accessor and label
					headerAlign={"left"} // Include left | right | center in header table
					bgHover={"bg-gray-100"} // Include row background color hover
					rowsPerPage={10} // Include number row per page
					filter // True | False filter in header table
				/>
			</div>
		</div>
	);
}

export default App;
