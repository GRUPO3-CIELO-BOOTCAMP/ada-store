import { Dispatch, SetStateAction } from 'react'
import ArrowLeft from './../assets/arrow_left.svg'
import ArrowRight from './../assets/arrow_right.svg'

interface PaginationProps {
  pageNumber: number
  pageSize: number
  setPageNumber: Dispatch<SetStateAction<number>>
}

export const Pagination = ({
  pageNumber,
  pageSize,
  setPageNumber,
}: PaginationProps) => {
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
    if (pageNumber < pageSize) {
      setPageNumber(pageNumber + 1)
    }
  }

  const handlePreviosPageClick = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1)
    }
  }

  const totalPages = pageSize
  const pageNumbers = getPageNumbers(pageNumber, totalPages)

  return (
    <div className="flex items-center justify-center bg-white px-4 py-3 sm:px-6 pb-32">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
        <div>
          <nav className="inline-flex -space-x-px" aria-label="Pagination">
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 text-gray-400 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 gap-4"
              onClick={handlePreviosPageClick}
            >
              <span className="flex gap-2 text-base">
                <img src={ArrowLeft} alt="seta para esquerda paginação" />{' '}
                Anterior
              </span>
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
                } px-4 py-2 text-base font-semibold hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
              >
                {page}
              </a>
            ))}
            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              onClick={handleNextPageClick}
            >
              <span className="flex gap-2 text-base">
                Próximo
                <img src={ArrowRight} alt="seta para esquerda paginação" />
              </span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}
