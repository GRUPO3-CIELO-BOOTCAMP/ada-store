import { useState } from 'react'

export const Pagination = () => {
  const [pageNumber, setPageNumber] = useState<number>(1)

  const getPageNumbers = (currentPage: number, totalPages: number) => {
    const pageNumbers = []
    const maxPageNumbersToShow = 5

    if (totalPages <= maxPageNumbersToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
      }
    } else {
      let startPage = currentPage - Math.floor(maxPageNumbersToShow / 2)
      startPage = Math.max(startPage, 1)

      let endPage = startPage + maxPageNumbersToShow - 1

      if (endPage > totalPages) {
        endPage = totalPages
        startPage = endPage - maxPageNumbersToShow + 1
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i)
      }
    }

    return pageNumbers
  }

  const handlePageNumberClick = (newPage: number) => {
    setPageNumber(newPage)
  }
  const handleNextPageClick = () => {
    setPageNumber(pageNumber + 1)
  }

  const handlePreviosPageClick = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1)
    }
  }

  const totalPages = 10
  const pageNumbers = getPageNumbers(pageNumber, totalPages)

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              onClick={handlePreviosPageClick}
            >
              <span>Anterior</span>
            </a>
            {pageNumbers.map((page) => (
              <a
                key={page}
                href="#"
                onClick={() => handlePageNumberClick(page)}
                className={`relative z-10 inline-flex items-center ${
                  page === pageNumber
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-900'
                } px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
              >
                {page}
              </a>
            ))}
            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              onClick={handleNextPageClick}
            >
              <span>Próximo</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}
