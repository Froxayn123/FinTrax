import PropTypes from "prop-types";
import Sidebar from "@/components/Sidebar.jsx";

const DashboardPageLayout = ({ children, profile, onClick }) => {
  return (
    <div className="flex w-full">
      <Sidebar profile={profile} onClick={onClick} />
      <div className="w-[80%] p-20">{children}</div>
    </div>
  );
};

export default DashboardPageLayout;
DashboardPageLayout.propTypes = {
  children: PropTypes.object,
  profile: PropTypes.object,
  onClick: PropTypes.func,
};
