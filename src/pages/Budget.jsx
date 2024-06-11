import ContentBudget from "../components/ContentBudget";
import Sidebar from "../components/Sidebar";

const Budget = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow">
        <ContentBudget/>
      </div>
    </div>
  );
};

export default Budget;
