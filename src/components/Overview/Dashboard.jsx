import React from 'react'

const Dashboard = () => {
  return (
    <aside className="w-60 flex flex-col justify-between items-start [background:var(--Blue-Hover-100,#0D243D)] fixed h-screen">
    <div className="flex items-center justify-center mb-4 mt-5 ml-4">
      <img src="/Logo-dasboard.png" alt="Profile" className="ms-auto" />
    </div>

    <div className="flex flex-col m-auto mb-4">
      <div className="rounded-full w-14 h-14 flex items-center justify-center mb-2 ml-3">
        <img src="/Avatar.png" alt="Profile" className="rounded-full w-full h-full object-cover" />
      </div>
      <h1 className="text-lg font-bold">Silvi Putri</h1>
    </div>

    <nav className="mt-4 flex-1 w-36 ml-10 overflow-y-auto">
      <ul className="space-y-3">
        <li>
          <a href="#" className="group flex items-center space-x-2 py-2 px-3 rounded-lg transition duration-300 ease-in-out hover:bg-white hover:text-purple-800">
            <span className="inline-block group-hover:filter group-hover:invert">
              <img src="./icon-sidebar/dashboard.svg" alt="" className="w-5 h-5" /></span>
            <span className="text-sm font-bold group-hover:text-purple-800">Overview</span>
          </a>
        </li>
        <li>
          <a href="#" className="group flex items-center space-x-2 py-2 px-3 rounded-lg transition duration-300 ease-in-out hover:bg-white hover:text-purple-800">
            <span className="inline-block group-hover:filter group-hover:invert">
              <img src="./icon-sidebar/transaction.svg" alt="" className="w-5 h-5" /></span>
            <span className="text-sm font-bold group-hover:text-purple-800">Transaction</span>
          </a>
        </li>
        <li>
          <a href="#" className="group flex items-center space-x-2 py-2 px-3 rounded-lg transition duration-300 ease-in-out hover:bg-white hover:text-purple-800">
            <span className="inline-block group-hover:filter group-hover:invert">
              <img src="./icon-sidebar/budget.svg" alt="" className="w-5 h-5" /></span>
            <span className="text-sm font-bold group-hover:text-purple-800">Budget</span>
          </a>
        </li>
        <li>
          <a href="#" className="group flex items-center space-x-2 py-2 px-3 rounded-lg transition duration-300 ease-in-out hover:bg-white hover:text-purple-800">
            <span className="inline-block group-hover:filter group-hover:invert">
              <img src="./icon-sidebar/invest.svg" alt="" className="w-5 h-5" /></span>
            <span className="text-sm font-bold group-hover:text-purple-800">Planning</span>
          </a>
        </li>
        <li>
          <a href="#" className="group flex items-center space-x-2 py-2 px-3 rounded-lg transition duration-300 ease-in-out hover:bg-white hover:text-purple-800">
            <span className="inline-block group-hover:filter group-hover:invert">
              <img src="./icon-sidebar/notification.svg" alt="" className="w-5 h-5" /></span>
            <span className="text-sm font-bold group-hover:text-purple-800">Notification</span>
          </a>
        </li>
        <li>
          <a href="#" className="group flex items-center space-x-2 py-2 px-3 rounded-lg transition duration-300 ease-in-out hover:bg-white hover:text-purple-800">
            <span className="inline-block group-hover:filter group-hover:invert">
              <img src="./icon-sidebar/Settings.png" alt="" className="w-5 h-5" /></span>
            <span className="text-sm font-bold group-hover:text-purple-800">Setting</span>
          </a>
        </li>
      </ul>
    </nav>
    <button className="group mt-2 mb-8 w-36 [background:var(--Blue-Hover-100,#0D243D)] transition duration-300 ease-in-out py-2 rounded-lg flex items-center justify-center ml-10 space-x-2 outline outline-white hover:bg-white hover:text-purple-800">
      <span className="inline-block group-hover:filter group-hover:invert">
        <img src="./icon-sidebar/logout.svg" alt="" className="w-5 h-5" /></span>
      <span className="text-sm font-bold group-hover:text-purple-800">Logout</span>
    </button>
  </aside>
  )
}

export default Dashboard