import React from "react";
import "./styles/main.css";
import "./styles/fontawesome-pro/css/all.css";
import {ITableColumnProps, Table} from "./components/table";

const columns = [
	{accessor: "name", label: "Name"},
	{accessor: "age", label: "Age"},
	{
		accessor: "is_manager",
		label: "Manager",
		format: (value: any) => (value ? "✔️" : "✖️"),
	},
	{accessor: "start_date", label: "Start Date"},
] as Array<ITableColumnProps>;

const rows = [
	{
		id: 1,
		name: "Liz Lemon",
		age: 36,
		is_manager: true,
		start_date: "02-28-1999",
	},
	{
		id: 2,
		name: "Jack Donaghy",
		age: 40,
		is_manager: true,
		start_date: "03-05-1997",
	},
	{
		id: 3,
		name: "Tracy Morgan",
		age: 39,
		is_manager: false,
		start_date: "07-12-2002",
	},
	{
		id: 4,
		name: "Jenna Maroney",
		age: 40,
		is_manager: false,
		start_date: "02-28-1999",
	},
	{
		id: 5,
		name: "Kenneth Parcell",
		age: Infinity,
		is_manager: false,
		start_date: "01-01-1970",
	},
	{
		id: 6,
		name: "Pete Hornberger",
		age: 42,
		is_manager: true,
		start_date: "04-01-2000",
	},
	{
		id: 7,
		name: "Frank Rossitano",
		age: 36,
		is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 8,
		name: "Liz Lemon 2",
		age: 36,
		is_manager: true,
		start_date: "02-28-1999",
	},
	{
		id: 9,
		name: "Jack Donaghy anna",
		age: 70,
		is_manager: true,
		start_date: "03-05-1997",
	},
	{
		id: 10,
		name: "Tracy annie cruz ",
		age: 39,
		is_manager: false,
		start_date: "07-12-2002",
	},
	{
		id: 11,
		name: "Lisa ann",
		age: 60,
		is_manager: false,
		start_date: "02-28-1999",
	},
	{
		id: 12,
		name: "Kendra lust",
		age: Infinity,
		is_manager: false,
		start_date: "01-01-1970",
	},
	{
		id: 13,
		name: "Lucy lee",
		age: 22,
		is_manager: true,
		start_date: "04-01-2000",
	},
	{
		id: 14,
		name: "Tia ling",
		age: 36,
		is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 15,
		name: "Asia",
		age: 46,
		is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 16,
		name: "Mia smile",
		age: 96,
		is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 17,
		name: "Saya song",
		age: 46,
		is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 18,
		name: "Lucky star",
		age: 38,
		is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 19,
		name: "Jessica bangkok",
		age: 49,
		is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 20,
		name: "Asa akira",
		age: 41,
		is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 21,
		name: "Lucy thai",
		age: 40,
		is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 22,
		name: "Cindy star fall",
		age: 86,
		is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 23,
		name: "Mika tan",
		age: 46,
		is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 24,
		name: "Ange maia",
		age: 35,
		is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 25,
		name: "Bonnie rotten",
		age: 75,
		is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 26,
		name: "Amai liu",
		age: 87,
		is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 27,
		name: "Pepper perri",
		age: 36,
		is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 28,
		name: "Sara jay",
		age: 24,
		is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 29,
		name: "Romi rain",
		age: 48,
		is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 30,
		name: "Brandy love",
		age: 25,
		is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 31,
		name: "Ava adam",
		age: 66,
		is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 32,
		name: "Angela white",
		age: 57,
		is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 33,
		name: "Diamon jackson",
		age: 84,
		is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 34,
		name: "Maria ozawa",
		age: 55,
		is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 35,
		name: "Kitty langdon",
		age: 22,
		is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 36,
		name: "Kitty jung",
		age: 35,
		is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 37,
		name: "Julia ann",
		age: 14,
		is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 38,
		name: "Mika tan",
		age: 35,
		is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 39,
		name: "Beti hana",
		age: 76,
		is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 40,
		name: "Lulu chu",
		age: 12,
		is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 41,
		name: "Regan foxx",
		age: 65,
		is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 42,
		name: "Mia khalifa",
		age: 25,
		is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 43,
		name: "Vina sky",
		age: 76,
		is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 44,
		name: "Riley reid",
		age: 36,
		is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 45,
		name: "Alina li",
		age: 36,
		is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 46,
		name: "London keys",
		age: 36,
		is_manager: false,
		start_date: "06-09-2004",
	},
	{id: 47, name: null, age: null, is_manager: null, start_date: null},
];

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
