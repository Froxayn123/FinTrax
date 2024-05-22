import ContentTransaction from "../components/ContentTransaction";
import Sidebar from "../components/Sidebar";

const Transaction = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ms-[280px] flex-grow">
        <ContentTransaction />
      </div>
    </div>
  );
};

export default Transaction;
