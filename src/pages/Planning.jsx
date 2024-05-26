import ContentPlanning from "../components/ContentPlanning";
import Sidebar from "../components/Sidebar";

const Budget = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow ms-[280px]">
        <ContentPlanning />
      </div>
    </div>
  );
};

export default Budget;
