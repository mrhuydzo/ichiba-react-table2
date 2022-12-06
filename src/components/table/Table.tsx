import { useMemo, useState } from "react";
import Pagination from "./Pagination";
import {
  colorPosition,
  filterRows,
  paginateRows,
  sortRows,
} from "./tableHelpers";
import { ITableProps, ITableSortProps } from "./types";

const Table = ({
  columns,
  rows,
  headerAlign,
  bgHover,
  filter,
  size = "p-3",
}: ITableProps) => {
  const [activePage, setActivePage] = useState<number>(1);
  const [stateRowsPerPage, setStateRowsPerPage] = useState<number>(5);
  const [filters, setFilters] = useState<any>({} as any);
  const [sort, setSort] = useState<ITableSortProps>({
    order: "asc",
    orderBy: "id",
  });

  // const rowsPerPage = 10;

  const filteredRows = useMemo(
    () => filterRows(rows, filters),
    [rows, filters]
  );
  const sortedRows = useMemo(
    () => sortRows(filteredRows, sort),
    [filteredRows, sort]
  );
  const calculatedRows = paginateRows(sortedRows, activePage, stateRowsPerPage);

  const count = filteredRows.length;
  //const totalPages = Math.ceil(count / rowsPerPage);

  const updateRowsPerPage = (rowsPerPage: number) => {
    setActivePage(1);
    setStateRowsPerPage(rowsPerPage);
  };

  const handleSearch = (value: any, accessor: string) => {
    setActivePage(1);

    if (value) {
      setFilters((prevFilters: any) => ({
        ...prevFilters,
        [accessor]: value,
      }));
    } else {
      setFilters((prevFilters: any) => {
        const updatedFilters = { ...prevFilters } as any;
        delete updatedFilters[accessor];

        return updatedFilters;
      });
    }
  };

  const handleSort = (accessor: string) => {
    setActivePage(1);
    setSort((prevSort) => ({
      order:
        prevSort.order === "asc" && prevSort.orderBy === accessor
          ? "desc"
          : "asc",
      orderBy: accessor,
    }));
  };

  // const clearAll = () => {
  //   setSort({ order: "asc", orderBy: "id" });
  //   setActivePage(1);
  //   setFilters({});
  // };
  // console.log("zzzzzzzzz",calculatedRows);
  return (
    <>
      <div className="overflow-hidden shadow-sm">
        <table className="w-full text-sm border-collapse table-auto">
          <thead className="bg-gray-200">
            <tr>
              {columns.map((column) => {
                const sortIcon = () => {
                  if (column.accessor === sort.orderBy) {
                    if (sort.order === "asc") {
                      return "arrow-up";
                    }
                    return "arrow-down";
                  } else {
                    return "arrows-v";
                  }
                };
                return (
                  <th key={column.accessor} className={`p-2`}>
                    <div className="flex">
                      <div className={`text-${headerAlign}`}>
                        <span className="text-lg">{column.label}</span>
                      </div>
                      <button
                        onClick={() => handleSort(column.accessor)}
                        className="p-1 ml-5"
                      >
                        <i className={`far fa-${sortIcon()} text-gray-500`} />
                      </button>
                    </div>
                  </th>
                );
              })}
            </tr>
            {filter && (
              <tr>
                {columns.map((column, index) => {
                  return (
                    <th key={index} className="p-2">
                      <div className="mt-1">
                        <input
                          key={`${column.accessor}-search`}
                          type="search"
                          className="text-gray-700 w-full px-3 py-2 placeholder:text-gray-500 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder={`Search ${column.label}`}
                          value={filters[column.accessor]}
                          onChange={(event) =>
                            handleSearch(event.target.value, column.accessor)
                          }
                        />
                      </div>
                    </th>
                  );
                })}
              </tr>
            )}
          </thead>
          <tbody>
            {calculatedRows.map((row) => {
              return (
                <tr
                  key={row.id}
                  className={` even:bg-neutral-50 hover:${bgHover}`}
                >
                  {columns.map((column) => {
                    // if (column.format) {
                    //   return (
                    //     <td key={column.accessor} className="p-4 border-b border-gray-300">
                    //       {column.format(row[column.accessor])}
                    //     </td>
                    //   );
                    // }
                    if (column.accessor === "position") {
                      return (
                        <td
                          key={column.accessor}
                          className={`${size} border-b border-gray-300`}
                        >
                          <strong
                            className={`${colorPosition[row[column.accessor]]}`}
                          >
                            {row[column.accessor]}
                          </strong>
                        </td>
                      );
                    }
                    return (
                      <td
                        key={column.accessor}
                        className={`${size} border-b border-gray-300`}
                      >
                        {row[column.accessor]}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>

        {count > 0 ? (
          <Pagination
            activePage={activePage}
            count={count}
            rowsPerPage={stateRowsPerPage}
            setActivePage={setActivePage}
            setRowPerPage={updateRowsPerPage}
          />
        ) : (
          <p>No data found</p>
        )}

        {/*<div>*/}
        {/*  <p>*/}
        {/*    <button onClick={clearAll}>Clear all</button>*/}
        {/*  </p>*/}
        {/*</div>*/}
      </div>
    </>
  );
};

export default Table;
