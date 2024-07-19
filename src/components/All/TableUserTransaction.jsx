import { useState } from "react";
import transactionData from "../../data/TransactionData";

const TableUserTransaction = () => {
  const [filteredUsers] = useState(transactionData);

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;
  const indexOfLastUser = currentPage * rowsPerPage;
  const indexOfFirstUser = indexOfLastUser - rowsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(filteredUsers.length / rowsPerPage)));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(filteredUsers.length / rowsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div className="mt-[32px] p-2 bg-white bg-opacity-5 border border-white border-opacity-50 rounded-xl">
        <h3 className="text-white font-semibold text-lg p-4">User’s Transaction History</h3>
        <table className="min-w-full bg-transparent text-white mb-4">
          <thead className="border-b-2 border-[#797979]">
            <tr>
              <th className="py-2 px-4 bg-transparent text-white font-normal text-start">User</th>
              <th className="py-2 px-4 bg-transparent text-white font-normal text-start">Date</th>
              <th className="py-2 px-4 bg-transparent text-white font-normal text-start">Amount</th>
              <th className="py-2 px-4 bg-transparent text-white font-normal text-start">Category</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((transaction, index) => (
              <tr key={index}>
                <td className="px-4 py-2 flex items-center">
                  <img src={transaction.profileImg} alt="Profile" className="w-8 h-8 rounded-full mr-2" />
                  {transaction.user}
                </td>
                <td className="px-4 py-2">{transaction.date}</td>
                <td className="px-4 py-2">{transaction.amount}</td>
                <td className="px-4 py-2">{transaction.Category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {filteredUsers.length > rowsPerPage && (
        <div className="flex justify-end mt-4 space-x-2">
          <button onClick={handlePreviousPage} className="px-4 py-2 text-white rounded-xl hover:border" disabled={currentPage === 1}>
            &lt;
          </button>
          {pageNumbers.map((page) => (
            <button key={page} onClick={() => handlePageChange(page)} className={`px-4 py-2 rounded-xl ${currentPage === page ? "text-white border" : "text-white"} hover:border`}>
              {page}
            </button>
          ))}
          <button onClick={handleNextPage} className="px-4 py-2 text-white rounded-xl hover:border" disabled={currentPage === totalPages}>
            &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default TableUserTransaction;
