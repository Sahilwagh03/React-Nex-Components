const PaginationItem = ({pageCount,className,currentPage,setCurrentPage}) => {
  const pageNumbers = Array.from({ length: pageCount }, (_, i) => i + 1); 

  return pageNumbers.map((pageNumber) => (
    <button
      key={pageNumber}
      onClick={() => setCurrentPage(pageNumber)}
      className={`px-4 py-2 rounded-md focus:outline-none border-2  dark:text-white ${
        currentPage === pageNumber ? 'border-gray-300 dark:border-[#2E2E2E]' : 'border-transparent'
      } ${className}`}
    >
      {pageNumber}
    </button>
  ));

};

export default PaginationItem