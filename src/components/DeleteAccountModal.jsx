import React, { useState } from 'react';

const DeleteAccountModal = ({ isOpen, closeModal }) => {
  const [confirmationText, setConfirmationText] = useState('');

  const handleDelete = () => {
    if (confirmationText === 'DELETE') {
      // Add your account deletion logic here
      alert('Account deleted!');
      closeModal();
    } else {
      alert('Please type "DELETE" to confirm.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="border-[var(--Letter-spacing-Letter-spacing,] border-[solid_var(--strokeglass,rgba(255,255,255,0.50))] [background:rgba(0,24,51,0.90)] shadow-[10.253px_12.303px_20.506px_0px_rgba(0,0,0,0.05)] backdrop-blur-[7.176966667175293px] p-10 rounded-[15px]">
        <h2 className="text-2xl font-bold mb-4 mt-4 border-b border-white pb-2">DELETE ACCOUNT</h2>
        <h1 className="text-lg font-semibold">Deleting your account will remove all your information from our database. This cannot be undone.</h1>
        <h1 className="mb-2 mt-6">To confirm this, type "DELETE"</h1>
        <input
          type="text"
          value={confirmationText}
          onChange={(e) => setConfirmationText(e.target.value)}
          className="bg-transparent text-white rounded border border-white focus:outline-none focus:border-white h-[var(--40,40px)] pt-[var(--8,] pb-[var(--16,] justify-center items-center self-stretch pl-[16px)] pr-[8px)]"
        />
        <div className="flex justify-start mt-2">
          <button onClick={closeModal} className="bg-transparent border border-[color:var(--BG,#ECEFF5)] border-solid text-white px-4 py-2 rounded-lg mr-2">
            Cancel
          </button>
          <button onClick={handleDelete} className=" [background:var(--Danger,#FF4332)] rounded px-4 py-2">
            DELETE ACCOUNT
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccountModal;
