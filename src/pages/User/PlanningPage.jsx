import ContentPlanning from "@/components/All/ContentPlanning";
import Sidebar from "@/components/Sidebar";

const Budget = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow ">
        <ContentPlanning />
      </div>
    </div>
  );
};

export default Budget;
