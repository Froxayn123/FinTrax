import { useState } from "react";
import General from "./General";
import Preference from "./Preference";
import Account from "./Account";
import UserPermissions from "./UserPermissions";

const SidebarSettingAdmin = () => {
  const [selectedMenu, setSelectedMenu] = useState("general");

  const renderContent = () => {
    switch (selectedMenu) {
      case "general":
        return <General />;
      case "preference":
        return <Preference />;
      case "account":
        return <Account />;
      case "user-permissions":
        return <UserPermissions />;
      default:
        return null;
    }
  };

  return (
    <div className="flex mt-[32px] h-screen bg-white bg-opacity-5 border border-white border-opacity-50 rounded-xl">
      <div className="w-64 border-r-2 border-[#797979] shadow-md">
        <nav className="mt-10 mr-5 ml-5">
          <ul>
            <li className="mb-2">
              <button
                onClick={() => setSelectedMenu("general")}
                className={`flex justify-between items-center py-2 px-4 text-left font-semibold w-full ${selectedMenu === "general" ? "bg-white bg-opacity-10 text-white font-semibold border border-white border-opacity-10" : "text-white hover:bg-white hover:bg-opacity-10 hover:border hover:border-white hover:border-opacity-10"} rounded-xl transition duration-150 ease-in-out`}
              >
                General
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right ml-auto" viewBox="0 0 16 16">
                  <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                </svg>
              </button>
            </li>
            <li className="mb-2">
              <button
                onClick={() => setSelectedMenu("preference")}
                className={`flex justify-between items-center py-2 px-4 text-left font-semibold w-full ${selectedMenu === "preference" ? "bg-white bg-opacity-10 text-white font-semibold border border-white border-opacity-10" : "text-white hover:bg-white hover:bg-opacity-10 hover:border hover:border-white hover:border-opacity-10"} rounded-xl transition duration-150 ease-in-out`}
              >
                Preference
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right ml-auto" viewBox="0 0 16 16">
                  <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                </svg>
              </button>
            </li>
            <li className="mb-2">
              <button
                onClick={() => setSelectedMenu("account")}
                className={`flex justify-between items-center py-2 px-4 text-left font-semibold w-full ${selectedMenu === "account" ? "bg-white bg-opacity-10 text-white font-semibold border border-white border-opacity-10" : "text-white hover:bg-white hover:bg-opacity-10 hover:border hover:border-white hover:border-opacity-10"} rounded-xl transition duration-150 ease-in-out`}
              >
                Account
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right ml-auto" viewBox="0 0 16 16">
                  <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                </svg>
              </button>
            </li>
            <li className="mb-2">
              <button
                onClick={() => setSelectedMenu("user-permissions")}
                className={`flex justify-between items-center py-2 px-4 text-left font-semibold w-full ${selectedMenu === "user-permissions" ? "bg-white bg-opacity-10 text-white font-semibold border border-white border-opacity-10" : "text-white hover:bg-white hover:bg-opacity-10 hover:border hover:border-white hover:border-opacity-10"} rounded-xl transition duration-150 ease-in-out`}
              >
                User Permissions
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right ml-auto" viewBox="0 0 16 16">
                  <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-1 p-6">{renderContent()}</div>
    </div>
  );
};

export default SidebarSettingAdmin;
