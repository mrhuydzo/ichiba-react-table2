export interface ITableColumnProps {
  accessor: string;
  label: string;
  format: (value: any) => string;
}

export interface ITableProps {
  columns: Array<ITableColumnProps>;
  rows: Array<any>;
  headerAlign?: string;
  bgOdd?: string;
  bgEven?: string;
  bgHover?: string;
  size?: string;
  filter: boolean;
  rowsPerPage: number
}

export interface ITableSortProps {
  order: "asc" | "desc";
  orderBy: string;
}

export interface IPaginationProps {
  activePage: number;
  count: number;
  rowsPerPage: number;
  totalPages?: number;
  setActivePage: (page: number) => void;
  setRowPerPage: (page: number) => void;
}