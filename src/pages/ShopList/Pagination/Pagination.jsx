import React from 'react';
import './Pagination.scss';

function Pagination({ productPerPage, totalProducts, currentPage, setCurrentPage }) {
  const maxPage = Math.ceil(totalProducts / productPerPage);
  let pageNumbers = [];
  for (let i = 1; i <= maxPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <ol className="pageList">
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber} className={`pageItem ${currentPage === pageNumber ? 'active' : ''}`}>
            <span onClick={() => setCurrentPage(pageNumber)} className="pageLink">
              {pageNumber}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Pagination;
