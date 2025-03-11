import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Trash2, Pen } from "lucide-react";

const Table = ({
  id,
  data,
  columns,
  onDelete,
  onEdit,
  PerPage,
  totalItems,
  idField = "id",
  showActions = true,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    const indexOfLast = currentPage * PerPage;
    const indexOfFirst = indexOfLast - PerPage;
    setCurrentData(data.slice(indexOfFirst, indexOfLast));
  }, [currentPage, data, PerPage]);

  const totalPages = Math.ceil(totalItems / PerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow">
      <table id={id} className="min-w-full leading-normal">
        <thead>
          <tr>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-gray-700 text-left text-xs font-semibold text-gray-600 dark:text-gray-200 uppercase tracking-wider">
              S.No
            </th>
            {columns.map((col, index) => (
              <th
                key={index}
                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-gray-700 text-left text-xs font-semibold text-gray-600 dark:text-gray-200 uppercase tracking-wider"
              >
                {col.label}
              </th>
            ))}
            {showActions && (
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-gray-700 text-left text-xs font-semibold text-gray-600 dark:text-gray-200 uppercase tracking-wider">
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
              <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm">
                <p className="text-gray-900 dark:text-gray-200 whitespace-no-wrap">
                  {(currentPage - 1) * PerPage + index + 1}
                </p>
              </td>
              {columns.map((col, colIndex) => (
                <td
                  key={colIndex}
                  className="px-5 py-5 border-b border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm"
                >
                  <p className="text-gray-900 dark:text-gray-200 whitespace-no-wrap">
                    {col.accessor ? item[col.accessor] : "N/A"}
                  </p>
                </td>
              ))}
              {showActions && (
                <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => onEdit(item[idField])}
                      className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      <Pen size={18} />
                    </button>
                    <button
                      onClick={() => onDelete(item[idField])}
                      className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Footer Section */}
      <div className="px-5 py-5 bg-white dark:bg-gray-800 border-t dark:border-gray-600 flex justify-between items-center">
        {/* Right-aligned Showing Text */}
        <span className="text-xs xs:text-sm text-right text-gray-900 dark:text-gray-200">
          Showing {Math.max((currentPage - 1) * PerPage + 1, 1)} to{" "}
          {Math.min(currentPage * PerPage, totalItems)} of {totalItems} Entries
        </span>

        {/* Pagination Buttons */}
        <div className="inline-flex mt-2 xs:mt-0">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="text-sm bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-semibold py-2 px-4 rounded-l disabled:opacity-50"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="text-sm bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-semibold py-2 px-4 rounded-r disabled:opacity-50"
          >
            <ChevronRight className="h-5 w=5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
