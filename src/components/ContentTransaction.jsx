import { useState } from "react";
import AddTransactionModal from "./AddTransactionModal";

const transactionsData = [
  { name: "Food & beverages", date: "2024-05-10", amount: +15000000, category: "Payment", icon: "/FoodBeverages.png", description: "Mie Gacoan" },
  { name: "education", date: "2024-05-11", amount: -500000, category: "Payment", icon: "/Education.png", description: "Skilvul Course" },
  { name: "Transportation", date: "2024-05-12", amount: -2000000, category: "Receive", icon: "/Transportation.png", description: "Vehicle Maintenance" },
];

const ContentTransaction = () => {
  const [transactions, setTransactions] = useState(transactionsData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddTransaction = () => {
    setIsModalOpen(true);
  };

  const handleExport = () => {
    const csvContent = `data:text/csv;charset=utf-8,${[
      ["Name", "Date", "Amount", "Category", "Description"],
      ...transactions.map((transaction) => [
        transaction.name,
        transaction.date,
        transaction.amount,
        transaction.category,
        transaction.description,
      ]),
    ]
      .map((e) => e.join(","))
      .join("\n")}`;

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "transactions.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    console.log("Export clicked");
  };

  const handleAddTransactionSubmit = (newTransaction) => {
    setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  function formatDate(dateString) {
    const options = { day: "numeric", month: "long", year: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  }

  function formatCurrency(amount) {
    return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(amount);
  }

  const [nameFilter, setNameFilter] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All Transaction");

  const filteredTransactions = transactions.filter((transaction) => {
    const transactionDate = new Date(transaction.date);
    const isWithinDateRange = (!startDate || new Date(startDate) <= transactionDate) && (!endDate || transactionDate <= new Date(endDate));
    const matchesCategory = categoryFilter === "All Transaction" || transaction.category === categoryFilter;

    return transaction.name.toLowerCase().includes(nameFilter.toLowerCase()) && isWithinDateRange && matchesCategory;
  });

  const categories = ["All Transaction", "Receive", "Payment"];

  return (
    <div className="bg-white bg-opacity-10 border-2 border-white border-opacity-25 p-4 ml-12 mt-12 mr-12 rounded-xl">
      <div className="mb-4 flex items-center">
        <h1 className="text-white text-3xl font-bold mr-4">Transactions</h1>
        <input
          type="text"
          placeholder="From date"
          value={startDate}
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => !startDate && (e.target.type = "text")}
          onChange={(e) => setStartDate(e.target.value)}
          className="text-white border bg-transparent border-gray-300 max-w-36 p-1 pl-4 mr-2 placeholder-white rounded-full"
        />
        <input
          type="text"
          placeholder="End Date"
          value={endDate}
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => !endDate && (e.target.type = "text")}
          onChange={(e) => setEndDate(e.target.value)}
          className="text-white border bg-transparent border-gray-300 max-w-36 p-1 pl-4 mr-2 placeholder-white rounded-full"
        />
        <button onClick={handleAddTransaction} className="text-white font-medium py-1 px-4 rounded-lg flex items-center ml-auto hover:bg-blue-400" style={{ background: 'linear-gradient(to right, #4E2DD1 50%, #8C3FD9 100%)' }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
          Add Transaction
        </button>
        <button onClick={handleExport} className="text-white font-medium py-1 px-4 rounded-lg ml-2 flex items-center hover:bg-blue-400" style={{ background: 'linear-gradient(to right, #4E2DD1 50%, #8C3FD9 100%)' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-2" viewBox="0 0 16 16" stroke="currentColor">
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
            <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z" />
          </svg>
          Export
        </button>
      </div>
      <div className="mb-2 flex items-center">
        <div className="flex space-x-2 ml-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setCategoryFilter(category)}
              className={`text-white p-2 border-b-2 ${categoryFilter === category ? "border-[#8A00D4] font-bold" : "border-transparent"} hover:border-blue-700 transition-colors`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="relative ml-auto">
          <input
            type="text"
            placeholder="Filter by Name"
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
            className="text-white border bg-transparent border-gray-300 max-w-40 p-1 pl-10 rounded-xl w-full search-icon placeholder-white"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </span>
        </div>
      </div>
      <table className="table-auto w-full text-white border-collapse">
        <thead>
          <tr>
            <th className="border-b font-semibold border-white px-4 py-2 text-left">Name</th>
            <th className="border-b font-semibold border-white px-4 py-2 text-left">Date</th>
            <th className="border-b font-semibold border-white px-4 py-2 text-left">Amount</th>
            <th className="border-b font-semibold border-white px-4 py-2 text-right">Category</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction) => (
            <tr key={`${transaction.name}-${transaction.date}`}>
              <td className="px-4 py-2">
                <div className="flex items-center font-semibold">
                  <img src={transaction.icon} alt={transaction.name} className="h-5 w-5 mr-2" />
                  <div>
                    <div>{transaction.name}</div>
                    <div className="text-sm text-gray-400">{transaction.description}</div>
                  </div>
                </div>
              </td>
              <td className="text-left px-4 py-2">{formatDate(transaction.date)}</td>
              <td className={`text-left px-4 py-2 ${transaction.amount > 0 ? "text-green-500" : "text-red-500"}`}>{formatCurrency(transaction.amount)}</td>
              <td className="text-right px-4 py-2">{transaction.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddTransactionModal isOpen={isModalOpen} onClose={handleModalClose} onAddTransaction={handleAddTransactionSubmit} />
    </div>
  );
};

export default ContentTransaction;