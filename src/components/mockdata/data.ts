import {ITableColumnProps} from "../table";

type IRows = {
	id: number,
	name?: string,
	position?: string,
	age?: number,
	//is_manager?: boolean,
	start_date?: string,
}
export const rows: Array<IRows> = [
	{
		id: 1,
		name: "Liz Lemon",
		age: 36,
		position: "Manager",
		// is_manager: true,
		start_date: "02-28-1999",
	},
	{
		id: 2,
		name: "Jack Donaghy",
		age: 40,
		position: "Employee",
		// is_manager: true,
		start_date: "03-05-1997",
	},
	{
		id: 3,
		name: "Tracy Morgan",
		age: 39,
		position: "Leader",
		// is_manager: false,
		start_date: "07-12-2002",
	},
	{
		id: 4,
		name: "Jenna Maroney",
		position: "Employee",
		age: 40,
		// is_manager: false,
		start_date: "02-28-1999",
	},
	{
		id: 5,
		name: "Kenneth Parcell",
		position: "Leader",
		age: 34,
		// is_manager: false,
		start_date: "01-01-1970",
	},
	{
		id: 6,
		name: "Pete Hornberger",
		position: "Leader",
		age: 42,
		// is_manager: true,
		start_date: "04-01-2000",
	},
	{
		id: 7,
		name: "Frank Rossitano",
		position: "Intern",
		age: 36,
		// is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 8,
		name: "Liz Lemon 2",
		position: "Employee",
		age: 36,
		// is_manager: true,
		start_date: "02-28-1999",
	},
	{
		id: 9,
		name: "Jack Donaghy anna",
		position: "Intern",
		age: 70,
		// is_manager: true,
		start_date: "03-05-1997",
	},
	{
		id: 10,
		name: "Tracy annie cruz ",
		position: "Employee",
		age: 39,
		// is_manager: false,
		start_date: "07-12-2002",
	},
	{
		id: 11,
		name: "Lisa ann",
		position: "Manager",
		age: 60,
		// is_manager: false,
		start_date: "02-28-1999",
	},
	{
		id: 12,
		name: "Kendra lust",
		position: "Employee",
		age: 23,
		// is_manager: false,
		start_date: "01-01-1970",
	},
	{
		id: 13,
		name: "Lucy lee",
		position: "Leader",
		age: 22,
		// is_manager: true,
		start_date: "04-01-2000",
	},
	{
		id: 14,
		name: "Tia ling",
		position: "Employee",
		age: 36,
		// is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 15,
		name: "Asia",
		position: "Manager",
		age: 46,
		// is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 16,
		name: "Mia smile",
		position: "Leader",
		age: 96,
		// is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 17,
		name: "Saya song",
		position: "Employee",
		age: 46,
		// is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 18,
		name: "Lucky star",
		position: "Employee",
		age: 38,
		// is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 19,
		name: "Jessica bangkok",
		position: "Manager",
		age: 49,
		// is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 20,
		name: "Asa akira",
		position: "Leader",
		age: 41,
		// is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 21,
		name: "Lucy thai",
		position: "Employee",
		age: 40,
		// is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 22,
		name: "Cindy star fall",
		position: "Intern",
		age: 86,
		// is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 23,
		name: "Mika tan",
		position: "Leader",
		age: 46,
		// is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 24,
		name: "Ange maia",
		position: "Employee",
		age: 35,
		// is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 25,
		name: "Bonnie rotten",
		position: "Leader",
		age: 75,
		// is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 26,
		name: "Amai liu",
		position: "Employee",
		age: 87,
		// is_manager: true,
		start_date: "06-09-2004",
	},
	{
		id: 27,
		name: "Pepper perri",
		position: "Manager",
		age: 36,
		// is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 28,
		name: "Sara jay",
		position: "Employee",
		age: 24,
		// is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 29,
		name: "Romi rain",
		position: "Employee",
		age: 48,
		// is_manager: true,
		start_date: "06-09-2004",
	},
	{
		id: 30,
		name: "Brandy love",
		position: "Employee",
		age: 25,
		// is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 31,
		name: "Ava adam",
		position: "Employee",
		age: 66,
		// is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 32,
		name: "Angela white",
		position: "Employee",
		age: 57,
		// is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 33,
		name: "Diamon jackson",
		position: "Employee",
		age: 84,
		// is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 34,
		name: "Maria ozawa",
		position: "Manager",
		age: 55,
		// is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 35,
		name: "Kitty langdon",
		position: "Employee",
		age: 22,
		// is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 36,
		name: "Kitty jung",
		position: "Employee",
		age: 35,
		// is_manager: true,
		start_date: "06-09-2004",
	},
	{
		id: 37,
		name: "Julia ann",
		position: "Employee",
		age: 14,
		// is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 38,
		name: "Mika tan",
		position: "Employee",
		age: 35,
		// is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 39,
		name: "Beti hana",
		position: "Employee",
		age: 76,
		// is_manager: true,
		start_date: "06-09-2004",
	},
	{
		id: 40,
		name: "Lulu chu",
		position: "Employee",
		age: 12,
		// is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 41,
		name: "Regan foxx",
		position: "Manager",
		age: 65,
		// is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 42,
		name: "Mia khalifa",
		position: "Employee",
		age: 25,
		// is_manager: true,
		start_date: "06-09-2004",
	},
	{
		id: 43,
		name: "Vina sky",
		position: "Employee",
		age: 76,
		// is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 44,
		name: "Riley reid",
		position: "Employee",
		age: 36,
		// is_manager: true,
		start_date: "06-09-2004",
	},
	{
		id: 45,
		name: "Alina li",
		position: "Employee",
		age: 36,
		// is_manager: false,
		start_date: "06-09-2004",
	},
	{
		id: 46,
		name: "London keys",
		position: "Employee",
		age: 36,
		// is_manager: false,
		start_date: "06-09-2004",
	},
];

export const columns = [
	{accessor: "name", label: "Name",},
	{accessor: "age", label: "Age"},
	{
		accessor: "position",
		label: "Position",
		// format: (value: any) => (value ? "✔️" : "✖️"),
	},
	{accessor: "start_date", label: "Start Date"},
] as Array<ITableColumnProps>;

