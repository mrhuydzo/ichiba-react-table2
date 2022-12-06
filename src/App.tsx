import React, {useState} from "react";
import "./styles/main.css";
import "./styles/fontawesome-pro/css/all.css";
import {Table} from "./components/table";
import {rows} from "./components/mockdata/data";
import {columns} from "./components/mockdata/data";



function App() {

	const [isSize, setSize] = useState<string>('p-3')
	const [isShowFilter, setShowFilter] = useState<boolean>(false)

	const handleSizeTable = (e: any) => {
		setSize(e.target.value)
		console.log(e.target.value)
	}

	const handleToggleFilter = () => {
		setShowFilter(prevShowFilter => !prevShowFilter)
	}

	return (
		<div className="App">
			<div className="container">
				<div className="py-4">
					<h1 className="text-3xl"><strong>Table</strong></h1>
					<h2 className="text-gray-500">Sorting, Filtering, Pagination</h2>
				</div>
				<hr/>
				<div className="flex justify-end items-center py-6">
					<div>
						<label htmlFor="show" className="mr-4">
							<input type="checkbox" id="show" name="filter" checked={isShowFilter} onChange={handleToggleFilter}/> Show/Hide filter
						</label>
					</div>
					<span className="text-gray-500 mx-4">|</span>
					<div>
						<strong className="mr-3">Select size:</strong>
						<select onChange={handleSizeTable} value={isSize} className="py-1 px-3 border rounded bg-gray-100 cursor-pointer outline-none">
							<option value="p-2">Small</option>
							<option value="p-3">Medium</option>
							<option value="p-4">Large</option>
						</select>
					</div>
				</div>
				<Table
					rows={rows} // Data Array
					columns={columns} // Include object columns accessor and label
					headerAlign={"left"} // Include left | right | center in header table
					bgHover={"bg-gray-100"} // Include row background color hover
					rowsPerPage={10} // Include number row per page
					filter={isShowFilter} // True | False filter in header table
					size={isSize} // Small | Medium | Large
				/>
			</div>
		</div>
	);
}

export default App;
