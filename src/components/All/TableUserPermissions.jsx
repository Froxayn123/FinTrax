import { useState, useEffect } from "react";
import UserPermissionsData from "../../data/UserPermissionsData";

const TableUserPermissions = () => {
  const [searchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(UserPermissionsData);

  useEffect(() => {
    const results = UserPermissionsData.filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()) || user.email.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredUsers(results);
  }, [searchTerm]);

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
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
      <div className="mt-4 p-2 border border-white border-opacity-50 rounded-xl">
        <table className="min-w-full bg-transparent text-white mb-4">
          <thead className="border-b-2 border-white">
            <tr>
              <th className="py-2 px-4 bg-transparent text-white font-normal text-start">No</th>
              <th className="py-2 px-4 bg-transparent text-white font-normal text-start">Name</th>
              <th className="py-2 px-4 bg-transparent text-white font-normal text-start">Email</th>
              <th className="py-2 px-4 bg-transparent text-white font-normal text-start">Type Access</th>
              <th className="py-2 px-4 bg-transparent text-white font-normal text-end">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user, index) => (
              <tr key={index} className="border-b-2 border-[#555558] ">
                <td className="px-4 py-2">{user.id}</td>
                <td className="px-4 py-2 flex items-center">
                  <img src={user.profileImg} alt="Profile" className="w-8 h-8 rounded-full mr-2" />
                  {user.name}
                </td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.typeaccess}</td>
                <td className="px-4 py-2">
                  <div className="flex justify-end space-x-2">
                    <button className="items-center px-2 py-2 bg-[#8F19BD] text-[14px] text-white rounded hover:bg-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-plus items-center" viewBox="0 0 16 16">
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                      </svg>
                    </button>
                    <button className="items-center px-2 py-2 bg-[#8F19BD] text-[14px] text-white rounded hover:bg-red-600 ml-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-plus items-center" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />{" "}
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {filteredUsers.length > rowsPerPage && (
        <div className="flex justify-end mt-4 space-x-2">
          <button onClick={handlePreviousPage} className="px-4 py-2 text-white rounded-xl hover:border " disabled={currentPage === 1}>
            &lt;
          </button>
          {pageNumbers.map((page) => (
            <button key={page} onClick={() => handlePageChange(page)} className={`px-4 py-2 rounded-xl ${currentPage === page ? " text-white border" : " text-white"} hover:border`}>
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

export default TableUserPermissions;
