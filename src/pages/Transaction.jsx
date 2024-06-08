import ContentTransaction from "../components/ContentTransaction";
import Sidebar from "../components/Sidebar";

const Transaction = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="mt-12 flex-grow">
        <ContentTransaction />
      </div>
    </div>
  );
};

export default Transaction;
