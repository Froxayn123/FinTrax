import NavbarAdmin from "@/components/All/NavbarAdmin";
import MenuAdmin from "@/components/ui/MenuAdmin";
import Traffic_Location from "@/components/AdminDashboard/Traffic_Location";
import Linechart_user from "@/components/AdminDashboard/Linechart_user";
import Traffic_Device from "@/components/AdminDashboard/Traffic_Device";
import Traffic_Website from "@/components/AdminDashboard/Traffic_Website";

const AdminDashboard = () => {
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
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="p-4 rounded-[var(--16,16px)] border border-[color:var(--strokeglass,rgba(255,255,255,0.50))] [background:var(--fillglass,linear-gradient(113deg,rgba(255,255,255,0.13)_3.51%,rgba(255,255,255,0.00)_111.71%))] shadow-[10.253px_12.303px_20.506px_0px_rgba(0,0,0,0.05)] px-[24px)] border-solid">
              <h2 className="text-lg font-normal mb-4 text-white">Views</h2>
              <div className="flex justify-between items-center">
                <p className="text-2xl text-white font-semibold">7,265</p>
                <div className="flex items-center space-x-2">
                  <p className="text-white text-lg">+11.01%</p>
                  <img src="./IconSet.png" alt="Profile" className="h-8 w-8 rounded-full" />
                </div>
              </div>
            </div>
            <div className="p-4 rounded-[var(--16,16px)] border border-[color:var(--strokeglass,rgba(255,255,255,0.50))] [background:var(--fillglass,linear-gradient(113deg,rgba(255,255,255,0.13)_3.51%,rgba(255,255,255,0.00)_111.71%))] shadow-[10.253px_12.303px_20.506px_0px_rgba(0,0,0,0.05)]  px-[24px)] border-solid">
              <h2 className="text-lg font-normal mb-4 text-white">Visits</h2>
              <div className="flex justify-between items-center">
                <p className="text-2xl text-white font-semibold">3,671</p>
                <div className="flex items-center space-x-2">
                  <p className="text-white text-lg">-0.03%</p>
                  <img src="./IconSet2.png" alt="Profile" className="h-8 w-8 rounded-full" />
                </div>
              </div>
            </div>
            <div className="p-4 rounded-[var(--16,16px)] border border-[color:var(--strokeglass,rgba(255,255,255,0.50))] [background:var(--fillglass,linear-gradient(113deg,rgba(255,255,255,0.13)_3.51%,rgba(255,255,255,0.00)_111.71%))] shadow-[10.253px_12.303px_20.506px_0px_rgba(0,0,0,0.05)]  px-[24px)] border-solid">
              <h2 className="text-lg font-normal mb-4 text-white">New Users</h2>
              <div className="flex justify-between items-center">
                <p className="text-2xl text-white font-semibold">256</p>
                <div className="flex items-center space-x-2">
                  <p className="text-white text-lg">+15.03%</p>
                  <img src="./IconSet.png" alt="Profile" className="h-8 w-8 rounded-full" />
                </div>
              </div>
            </div>
            <div className="p-4 rounded-[var(--16,16px)] border border-[color:var(--strokeglass,rgba(255,255,255,0.50))] [background:var(--fillglass,linear-gradient(113deg,rgba(255,255,255,0.13)_3.51%,rgba(255,255,255,0.00)_111.71%))] shadow-[10.253px_12.303px_20.506px_0px_rgba(0,0,0,0.05)]  px-[24px)] border-solid">
              <h2 className="text-lg font-normal mb-4 text-white">Active Users</h2>
              <div className="flex justify-between items-center">
                <p className="text-2xl text-white font-semibold">2,318</p>
                <div className="flex items-center space-x-2">
                  <p className="text-white text-lg">+6.08%</p>
                  <img src="./IconSet.png" alt="Profile" className="h-8 w-8 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="col-span-3 p-8 rounded-[var(--16,16px)] border border-[color:var(--strokeglass,rgba(255,255,255,0.50))] [background:var(--fillglass,linear-gradient(113deg,rgba(255,255,255,0.13)_3.51%,rgba(255,255,255,0.00)_111.71%))] shadow-[10.253px_12.303px_20.506px_0px_rgba(0,0,0,0.05)]  px-[24px)] border-solid">
              <div className="flex items-center text-white">
                <h2 className="text-lg font-semibold mr-4">Total Users |</h2>
                <div className="w-3 h-3 bg-green-500 mr-2"></div>
                <span className="mr-5">This year</span>
                <div className="w-3 h-3 border-2 bg-gray-400 mr-2"></div>
                <span>Last year</span>
              </div>
              <div>
                <Linechart_user />
              </div>
            </div>
            <div className="p-8 rounded-[var(--16,16px)] border border-[color:var(--strokeglass,rgba(255,255,255,0.50))] [background:var(--fillglass,linear-gradient(113deg,rgba(255,255,255,0.13)_3.51%,rgba(255,255,255,0.00)_111.71%))] shadow-[10.253px_12.303px_20.506px_0px_rgba(0,0,0,0.05)]  px-[24px)] border-solid">
              <div className="flex items-center text-white">
                <h2 className="text-lg font-semibold mr-4 mb-4">Traffic by Website</h2>
              </div>
              <Traffic_Website />
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4 mb-1">
            <div className="p-2 rounded-[var(--16,16px)] border border-[color:var(--strokeglass,rgba(255,255,255,0.50))] [background:var(--fillglass,linear-gradient(113deg,rgba(255,255,255,0.13)_3.51%,rgba(255,255,255,0.00)_111.71%))] shadow-[10.253px_12.303px_20.506px_0px_rgba(0,0,0,0.05)]  px-[24px)] border-solid">
              <Traffic_Device />
            </div>
            <div className="p-2 rounded-[var(--16,16px)] border border-[color:var(--strokeglass,rgba(255,255,255,0.50))] [background:var(--fillglass,linear-gradient(113deg,rgba(255,255,255,0.13)_3.51%,rgba(255,255,255,0.00)_111.71%))] shadow-[10.253px_12.303px_20.506px_0px_rgba(0,0,0,0.05)]  px-[24px)] border-solid">
              <Traffic_Location />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
