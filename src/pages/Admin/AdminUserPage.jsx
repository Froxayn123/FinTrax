import NavbarAdmin from "@/components/All/NavbarAdmin";
import MenuAdmin from "@/components/ui/MenuAdmin";
import TableUser from "@/components/All/TableUser";
import TableUserTransaction from "@/components/All/TableUserTransaction";

const AdminUser = () => {
  return (
    <div>
      <header>
        <NavbarAdmin />
      </header>
      <main className="mx-[100px] mt-4 mb-[64px]">
        <div className="flex justify-between mt-[32px]">
          <div className="flex items-center">
            <MenuAdmin />
          </div>
          <div className="flex space-x-2 items-center">
            <button className="flex items-center px-2 py-0.5 h-10 bg-transparent text-[14px] text-white rounded hover:bg-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus mr-2 items-center" viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
              Add User
            </button>
            <button className="flex items-center px-4 py-0.5 h-10 bg-transparent text-[14px] text-white rounded hover:bg-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                <path d="M3 9.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zM7.5 9.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zM11.5 9.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z" />
              </svg>
            </button>
          </div>
        </div>
        <TableUser />
        <TableUserTransaction />
      </main>
    </div>
  );
};

export default AdminUser;
