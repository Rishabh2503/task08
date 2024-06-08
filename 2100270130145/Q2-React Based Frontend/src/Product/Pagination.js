import React from 'react';
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePageChange = (page) => {
    onPageChange(page);
  };

  return (
    <div className="flex justify-center mt-4">
      <nav className="block">
        <ul className="flex pl-0 rounded list-none flex-wrap">
          {!isFirstPage && (
            <li>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-l"
              >
                Previous
              </button>
            </li>
          )}

          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index}>
              <button
                onClick={() => handlePageChange(index + 1)}
                className={`${
                  currentPage === index + 1
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                } font-semibold py-2 px-4 rounded`}
              >
                {index + 1}
              </button>
            </li>
          ))}

          {!isLastPage && (
            <li>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-r"
              >
                Next
              </button>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
