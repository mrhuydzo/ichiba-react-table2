import { IPaginationProps } from "./types";

const Pagination = ({
  activePage,
  count,
  rowsPerPage,
  setActivePage,
  setRowPerPage,
}: IPaginationProps) => {
  const totalPages = Math.ceil(count / rowsPerPage);
  const beginning = activePage === 1 ? 1 : rowsPerPage * (activePage - 1) + 1;
  const end = activePage === totalPages ? count : beginning + rowsPerPage - 1;

  const onSelectRowPerPage = (e: any) => {
    setRowPerPage(Number(e.target.value));
  };

  return (
    <>
      <div className="flex justify-end items-center p-3 bg-gray-200">
        <div className="mr-5">
          Page {activePage} of {totalPages}
        </div>
        <div className="mr-5">
          <select
            className="bg-neutral-50 outline-none cursor-pointer p-1"
            onChange={onSelectRowPerPage}
            defaultValue={5}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
        </div>
        <div className="mr-5">
          Rows: {beginning === end ? end : `${beginning} - ${end}`} of {count}
        </div>
        <div>
          <button
            disabled={activePage === 1}
            onClick={() => setActivePage(1)}
            className="py-2 px-4 disabled:opacity-25"
          >
            <i className="far fa-arrow-to-left" />
          </button>
          <button
            disabled={activePage === 1}
            className="py-2 px-4 disabled:opacity-25"
            onClick={() => setActivePage(activePage - 1)}
          >
            <i className="far fa-chevron-left" />
          </button>
          <button
            disabled={activePage === totalPages}
            className="py-2 px-4 disabled:opacity-25"
            onClick={() => setActivePage(activePage + 1)}
          >
            <i className="far fa-chevron-right" />
          </button>
          <button
            disabled={activePage === totalPages}
            className="py-2 px-4 disabled:opacity-25"
            onClick={() => setActivePage(totalPages)}
          >
            <i className="far fa-arrow-to-right" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
