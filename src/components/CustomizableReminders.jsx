import React from 'react'
import Reminders from "./Reminders";


const CustomizableReminders = ({onClose}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className=" w-[800px] bg-[#001833] bg-opacity-90 px-10 rounded-2xl border-2 border-white border-opacity-20 shadow-lg relative">
        <button onClick={onClose} className="absolute top-2 left-2 text-white text-xl focus:outline-none flex items-center ml-7 mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
          </svg>
          <span className="ml-2">Back</span>
        </button>
        <h2 className="text-xl py-5 px-40 font-semibold text-white mb-4 text-center border-b border-[#797979]">Customizable Reminders</h2>
        <div className="mb-8 text-white mt-4 [background:linear-gradient(113deg,rgba(255,255,255,0.13)_3.51%,rgba(255,255,255,0.00)_111.71%)] shadow-[10.253px_12.303px_20.506px_0px_rgba(0,0,0,0.05)] backdrop-blur-[7.176966667175293px] rounded-[15px] border-[1.23px] border-solid border-[rgba(255,255,255,0.50)]">
        <Reminders />
        </div>
      </div>
    </div>
  )
}

export default CustomizableReminders