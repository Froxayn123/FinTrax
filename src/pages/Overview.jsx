import BudgetChart from "../components/Overview/BudgetChart";
import Summary from "../components/Overview/Summary";
import Calendar from "../components/Overview/Calendar";
import Sidebar from "../components/Sidebar";

const Overview = () => {
  return (
    <div className="min-h-screen [background:var(--Blue-100,#001833)] text-white font-sans flex flex-col lg:flex-row">
      <Sidebar />
      <main className="flex-1 px-4 lg:px-7 mt-6 lg:mt-12">
        <header className="flex justify-between items-center mb-8 mt-5 lg:mt-0">
          <div className="flex items-center">
            <h2 className="text-xl font-semibold">Balance:</h2>
            <h2 className="text-2xl font-semibold ml-2">RP1.250.000</h2>
          </div>
          <span className="text-xl lg:text-2xl font-semibold">Hello, Silvi Putri!👋</span>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 relative bg-gradient-to-r from-white/20 to-transparent shadow-lg backdrop-blur rounded-lg border border-white/50">
            <button className="absolute top-0 right-0 text-white w-8 h-8 flex items-center justify-center focus:outline-none rounded-bl-3xl rounded-tr-xl bg-gradient-to-b from-purple-700 to-purple-600 p-3">⁝</button>
            <h3 className="text-lg font-semibold text-white">Income this Month</h3>
            <p className="text-2xl mt-1 text-white">Rp2.800.000</p>
            <img src="./Income-bar.png" alt="" className="" />
            <p className="text-green-500 text-sm mt-0">↑ +2,12%</p>
          </div>

          <div className="p-5 relative bg-gradient-to-r from-white/20 to-transparent shadow-lg backdrop-blur rounded-lg border border-white/50">
            <button className="absolute top-0 right-0 text-white w-8 h-8 flex items-center justify-center focus:outline-none rounded-bl-3xl rounded-tr-xl bg-gradient-to-b from-purple-700 to-purple-600 p-3">⁝</button>
            <h3 className="text-lg font-semibold text-white">Expense this Month</h3>
            <p className="text-2xl mt-1 text-white">Rp840.000</p>
            <img src="./Expense-bar.png" alt="" className="" />
            <p className="text-red-500 text-sm mt-0">↓ -2,53%</p>
          </div>

          <div className="col-span-1 sm:col-span-2 p-4 relative flex flex-col lg:flex-row items-center justify-between w-full bg-gradient-to-r from-white/20 to-transparent shadow-lg backdrop-blur rounded-lg border border-white/50">
            <div className="text-left flex-1">
              <h3 className="text-2xl lg:text-3xl font-semibold mb-2">Keep saving, stay wealthy, and smart!</h3>
              <h3 className="text-sm font-semibold mb-2">Saving now will not make you poor</h3>
              <button className="mt-2 bg-gradient-to-r from-purple-800 to-purple-600 shadow-md rounded-lg text-white py-1 px-2 text-sm hover:bg-gradient-to-r from-purple-600 to-purple-800">Saving Now</button>
            </div>
            <img src="./KeepSaving.png" alt="" className="w-24 h-24 lg:w-36 lg:h-36 object-contain mr-0 lg:mr-10 mt-4 lg:mt-0" />
          </div>
        </section>

        <section className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <BudgetChart />

          <div className="p-4 bg-gradient-to-r from-white/20 to-transparent shadow-lg backdrop-blur rounded-lg border border-white/50">
            <div className="flex items-center mb-4">
              <h3 className="text-2xl lg:text-3xl font-semibold mr-1">History Transaction</h3>
              <button className="ml-auto flex justify-center text-white items-center gap-2.5 border border-gray-300 px-2.5 py-1 rounded-3xl hover:bg-white hover:text-black">See More</button>
            </div>
            <ul>
              <li className="flex justify-between items-center my-1">
                <div className="flex items-center">
                  <img src="/FoodBeverages.png" alt="" className="w-8 h-9 mr-5 mb-4" />
                  <div className="flex flex-col space-y-1">
                    <div className="text-sm">Food & Beverages</div>
                    <div className="text-sm">Mie Gacoan</div>
                  </div>
                </div>
                <div className="text-sm">7/8/2017</div>
                <div className="text-sm mr-4 text-rose-600">-Rp25.000</div>
              </li>
              <li className="flex justify-between items-center my-1">
                <div className="flex items-center">
                  <img src="/Education.png" alt="" className="w-8 h-9 mr-5 mb-4" />
                  <div className="flex flex-col space-y-1">
                    <div className="text-sm">Education</div>
                    <div className="text-sm">Mie Gacoan</div>
                  </div>
                </div>
                <div className="text-sm">7/6/2017</div>
                <div className="text-sm mr-4 text-rose-600">-Rp100.000</div>
              </li>
              <li className="flex justify-between items-center my-1">
                <div className="flex items-center">
                  <img src="/Transportation.png" alt="" className="w-8 h-9 mr-5 mb-4" />
                  <div className="flex flex-col space-y-1">
                    <div className="text-sm">Transportation</div>
                    <div className="text-sm">Mie Gacoan</div>
                  </div>
                </div>
                <div className="text-sm">7/1/2017</div>
                <div className="text-sm mr-4 text-rose-600">-Rp90.000</div>
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4 mb-1">
          <div className="p-2 bg-gradient-to-r from-white/20 to-transparent shadow-lg backdrop-blur rounded-lg border border-white/50">
            <Summary />
          </div>
          <div className="p-6 bg-gradient-to-r from-white/20 to-transparent shadow-lg backdrop-blur rounded-lg border border-white/50">
            <Calendar />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Overview;
