import React, { useState } from 'react';
import DeleteAccountModal from '../components/DeleteAccountModal';
import Sidebar from '../components/Sidebar';

const AccountInformation = () => {
  const [name, setName] = useState('Silvi Putri');
  const [email, setEmail] = useState('silviputri@gmail.com');
  const [phoneNumber, setPhoneNumber] = useState('+62 87654321098');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('Indonesia');

  const handleSave = (e) => {
    e.preventDefault();
    // Logika untuk menyimpan data (misalnya, panggilan API) bisa ditambahkan di sini
    console.log({ name, email, phoneNumber, age, address });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Account Information</h2>
      <form className="flex flex-wrap justify-between gap-4" onSubmit={handleSave}>
        <div className="flex flex-col w-full md:w-[calc(50%-0.5rem)] gap-5">
          <div className="flex items-center gap-4">
            <img src="/Avatar.png" alt="Profile" className="rounded-full w-14 h-14" />
            <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded">
              Change Profile Photo
            </button>
          </div>
          <div className="w-full">
            <label className="block mb-1">Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 bg-transparent text-white rounded border border-white focus:outline-none focus:border-purple-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label className="block mb-1">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 bg-transparent text-white rounded border border-white focus:outline-none focus:border-purple-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-full text-purple-400 cursor-pointer hover:underline">
            Change Password
          </div>
          <div className="w-full mt-20">
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded"
            >
              Save
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-[calc(50%-0.5rem)] gap-5 mt-[-1rem]">
          <div className="w-full">
            <label className="block mb-1">Phone Number</label>
            <input
              type="tel"
              className="w-full px-3 py-2 bg-transparent text-white rounded border border-white focus:outline-none focus:border-purple-500"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label className="block mb-1">Age</label>
            <select
              className="w-full px-3 py-2 bg-transparent text-white rounded border border-white focus:outline-none focus:border-purple-500"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            >
              <option className="bg-gray-700 text-white border-purple-500" value="">18-24</option>
              <option className="bg-gray-700 text-white border-purple-500" value="24-30">24-30</option>
              <option className="bg-gray-700 text-white border-purple-500" value="30-40">30-40</option>
            </select>
          </div>
          <div className="w-full">
            <label className="block mb-1">Address</label>
            <select
              className="w-full px-3 py-2 bg-transparent text-white rounded border border-white focus:outline-none focus:border-purple-500"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            >
              <option className="bg-gray-700 text-white border-purple-500" value="Indonesia">Indonesia</option>
              <option className="bg-gray-700 text-white border-purple-500" value="Malaysia">Malaysia</option>
              <option className="bg-gray-700 text-white border-purple-500" value="Singapore">Singapore</option>
              <option className="bg-gray-700 text-white border-purple-500" value="Thailand">Thailand</option>
              <option className="bg-gray-700 text-white border-purple-500" value="Vietnam">Vietnam</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

const Preference = () => (
    <div>
    <h2 className="text-2xl font-semibold mb-6">Preference</h2>
    <form className="flex flex-wrap justify-between gap-4">
    <div className="flex flex-col w-full md:w-[calc(50%-0.5rem)] gap-5 mt-[-1rem]">
    <div className="w-full">
          <label className="block mb-1">Notification</label>
          <select className="w-full px-3 py-2 bg-transparent text-white rounded border border-white focus:outline-none focus:border-purple-500">
            <option className="bg-gray-700 text-white border-purple-500" value="Push Notification">Push Notification</option>
            <option className="bg-gray-700 text-white border-purple-500" value="Push Notification">Push Notification</option>
            <option className="bg-gray-700 text-white border-purple-500" value="Push Notification">Push Notification</option>
          </select>
        </div>
        <div className="w-full">
          <label className="block mb-1">Currency</label>
          <select className="w-full px-3 py-2 bg-transparent text-white rounded border border-white focus:outline-none focus:border-purple-500">
            <option className="bg-gray-700 text-white border-purple-500" value="Rupia">Rupia</option>
            <option className="bg-gray-700 text-white border-purple-500" value="Ringgit">Euro</option>
            <option className="bg-gray-700 text-white border-purple-500" value="Dolar">Dolar</option>
          </select>
        </div>
        <div className="w-full">
          <label className="block mb-1">Text Font</label>
          <select className="w-full px-3 py-2 bg-transparent text-white rounded border border-white focus:outline-none focus:border-purple-500">
            <option className="bg-gray-700 text-white border-purple-500" value="100%">100%</option>
            <option className="bg-gray-700 text-white border-purple-500" value="75%">75%</option>
            <option className="bg-gray-700 text-white border-purple-500" value="50%">50%</option>
            <option className="bg-gray-700 text-white border-purple-500" value="25%">25%</option>
          </select>
        </div> 
      </div>
      <div className="flex flex-col w-full md:w-[calc(50%-0.5rem)] gap-5 mt-[-1rem]">
        <div className="w-full">
          <label className="block mb-1">Themes</label>
          <select className="w-full px-3 py-2 bg-transparent text-white rounded border border-white focus:outline-none focus:border-purple-500">
            <option className="bg-gray-700 text-white border-purple-500" value="Default System">Default System</option>
            <option className="bg-gray-700 text-white border-purple-500" value="Default System">Dark System</option>
          </select>
        </div>
        <div className="w-full text-purple-400 cursor-pointer underline mt-[-5]">
        Repeat the personalized questionnaire
        </div>
      </div>
    </form>
  </div>
);

const Subscribe = () => (
  <div>
    <div className="flex flex-col items-center">
        <img src="/Sub.png" alt="Profile" className="w-42 h-42 mb-4" />
        <h2 className="text-2xl font-medium mb-4">You Haven't subscribed yet :(</h2>
        <button className="px-6 py-2 bg-purple-800 text-white rounded-full hover:bg-purple-600">Subscribe Now</button>
    </div>
  </div>
);

const Help = () => (
  <div>
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-semibold">Frequently Asked Question</h2>
      <button className=" px-2.5 py-1 justify-center items-center border border-[color:var(--BG,#ECEFF5)] rounded-[20px] border-solid hover:bg-white hover:text-black">See More</button>
    </div>
          <form className="flex flex-wrap justify-between gap-4">
            <div className="flex flex-col w-full ">
              
            <div className="w-full mb-6  border-[var(--Letter-spacing-Letter-spacing,] border-[solid_var(--strokeglass,rgba(255,255,255,0.50))] [background:var(--fillglass,linear-gradient(113deg,rgba(255,255,255,0.13)_3.51%,rgba(255,255,255,0.00)_111.71%))] shadow-[10.253px_12.303px_20.506px_0px_rgba(0,0,0,0.05)] backdrop-blur-[7.176966667175293px]">
                <select className="w-full rounded-[var(--4,4px)] px-3 py-2 bg-transparent text-white  focus:outline-none focus:border-purple-500">
                  <option className="bg-gray-700 text-white border-purple-500" value="How do I track my expenses?">How do I track my expenses?</option>
                  <option className="bg-gray-700 text-white border-purple-500" value="">-</option>
                </select>
            </div>

            <div className="w-full mb-6  border-[var(--Letter-spacing-Letter-spacing,] border-[solid_var(--strokeglass,rgba(255,255,255,0.50))] [background:var(--fillglass,linear-gradient(113deg,rgba(255,255,255,0.13)_3.51%,rgba(255,255,255,0.00)_111.71%))] shadow-[10.253px_12.303px_20.506px_0px_rgba(0,0,0,0.05)] backdrop-blur-[7.176966667175293px]">
                <select className="w-full rounded-[var(--4,4px)] px-3 py-2 bg-transparent text-white  focus:outline-none focus:border-purple-500">
                  <option className="bg-gray-700 text-white border-purple-500" value="What should I do if I encounter a bug or technical issue?">What should I do if I encounter a bug or technical issue?</option>
                  <option className="bg-gray-700 text-white border-purple-500" value="">-</option>
                </select>
            </div>

            <div className="w-full mb-6  border-[var(--Letter-spacing-Letter-spacing,] border-[solid_var(--strokeglass,rgba(255,255,255,0.50))] [background:var(--fillglass,linear-gradient(113deg,rgba(255,255,255,0.13)_3.51%,rgba(255,255,255,0.00)_111.71%))] shadow-[10.253px_12.303px_20.506px_0px_rgba(0,0,0,0.05)] backdrop-blur-[7.176966667175293px]">
                <select className="w-full rounded-[var(--4,4px)] px-3 py-2 bg-transparent text-white  focus:outline-none focus:border-purple-500">
                  <option className="bg-gray-700 text-white border-purple-500" value="How can I upgrade my subscription plan?">How can I upgrade my subscription plan?</option>
                  <option className="bg-gray-700 text-white border-purple-500" value="">-</option>
                </select>
            </div>

            <div className="w-full mb-6  border-[var(--Letter-spacing-Letter-spacing,] border-[solid_var(--strokeglass,rgba(255,255,255,0.50))] [background:var(--fillglass,linear-gradient(113deg,rgba(255,255,255,0.13)_3.51%,rgba(255,255,255,0.00)_111.71%))] shadow-[10.253px_12.303px_20.506px_0px_rgba(0,0,0,0.05)] backdrop-blur-[7.176966667175293px]">
                <select className="w-full rounded-[var(--4,4px)] px-3 py-2 bg-transparent text-white  focus:outline-none focus:border-purple-500">
                  <option className="bg-gray-700 text-white border-purple-500" value="Can I set savings goals?">Can I set savings goals?</option>
                  <option className="bg-gray-700 text-white border-purple-500" value="">-</option>
                </select>
            </div>
            </div>        
            </form>
            <h2 className="text-2xl font-semibold mb-4 mt-5">Contact Support</h2>
            <form>
            <div className="mb-4 flex space-x-4">
                <div className="w-1/2 ">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                    <input
                        type="email"
                        className="w-full px-3 py-2 bg-transparent text-white rounded border border-white focus:outline-none focus:border-purple-500"
                        value="silviputri@gmail.com" />
                    </div>
                <div className="w-1/2 ">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 bg-transparent text-white rounded border border-white focus:outline-none focus:border-purple-500"
                        value="Silvi Putri"/>
                    </div>
                </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
              <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 bg-transparent text-white rounded border border-white focus:outline-none focus:border-purple-500" placeholder="Tell us your problem"></textarea>
            </div>
            <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg">Submit</button>
            </form>
            <div className="mt-8">
                <p className="text-gray-400">Live Chat: <a href="#" className="text-indigo-400 hover:underline">[Link to initiate chat]</a></p>
                <p className="text-gray-400">Download User Guide: <a href="#" className="text-indigo-400 hover:underline">[Link to PDF]</a></p>
            </div>
  </div>
);

const Setting = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState('AccountInformation');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const renderContent = () => {
    switch (activeComponent) {
      case 'AccountInformation':
        return <AccountInformation />;
      case 'Preference':
        return <Preference />;
      case 'Subscribe':
        return <Subscribe />;
      case 'Help':
        return <Help />;
      default:
        return <AccountInformation />;
    }
  };

  return (
    <div className="min-h-screen [background:var(--Blue-100,#001833)] text-white font-sans flex">
      <Sidebar />
      <main className="flex-1 pl-16 pr-16 ml-60 mt-10">
        <section className="grid grid-cols-4 gap-2">
          <div className="col-span-4 p-4 relative flex items-center justify-between w-full [background:linear-gradient(113deg,rgba(255,255,255,0.13)_3.51%,rgba(255,255,255,0.00)_111.71%)] shadow-[10.253px_12.303px_20.506px_0px_rgba(0,0,0,0.05)] backdrop-blur-[7.176966667175293px] rounded-[15px] border-[1.23px] border-solid border-[rgba(255,255,255,0.50)]">
            <div className="flex flex-col items-center gap-2 self-stretch border-r-[color:var(--Placeholder,#797979)] pt-8 pb-16 border-r border-solid">
              <nav>
                <ul>
                  <li className="py-2">
                    <button onClick={() => setActiveComponent('AccountInformation')} className="text-base font-semibold flex w-[282px] justify-between items-center hover:border-[color:var(--strokeglass,rgba(255,255,255,0.50))] hover:[background:var(--fillglass,linear-gradient(113deg,rgba(255,255,255,0.13)_3.51%,rgba(255,255,255,0.00)_111.71%))] hover:shadow-[10.253px_12.303px_20.506px_0px_rgba(0,0,0,0.05)] hover:backdrop-blur-[7.176966667175293px] px-3 py-1 rounded-lg border-solid">
                      Account Information <span>&gt;</span>
                    </button>
                  </li>
                  <li className="py-2">
                    <button onClick={() => setActiveComponent('Preference')} className="text-base font-semibold flex w-[282px] justify-between items-center hover:border-[color:var(--strokeglass,rgba(255,255,255,0.50))] hover:[background:var(--fillglass,linear-gradient(113deg,rgba(255,255,255,0.13)_3.51%,rgba(255,255,255,0.00)_111.71%))] hover:shadow-[10.253px_12.303px_20.506px_0px_rgba(0,0,0,0.05)] hover:backdrop-blur-[7.176966667175293px] px-3 py-1 rounded-lg border-solid">
                      Preference <span>&gt;</span>
                    </button>
                  </li>
                  <li className="py-2">
                    <button onClick={() => setActiveComponent('Subscribe')} className="text-base font-semibold flex w-[282px] justify-between items-center hover:border-[color:var(--strokeglass,rgba(255,255,255,0.50))] hover:[background:var(--fillglass,linear-gradient(113deg,rgba(255,255,255,0.13)_3.51%,rgba(255,255,255,0.00)_111.71%))] hover:shadow-[10.253px_12.303px_20.506px_0px_rgba(0,0,0,0.05)] hover:backdrop-blur-[7.176966667175293px] px-3 py-1 rounded-lg border-solid">
                      Subscribe <span>&gt;</span>
                    </button>
                  </li>
                  <li className="py-2">
                    <button onClick={() => setActiveComponent('Help')} className="text-base font-semibold flex w-[282px] justify-between items-center hover:border-[color:var(--strokeglass,rgba(255,255,255,0.50))] hover:[background:var(--fillglass,linear-gradient(113deg,rgba(255,255,255,0.13)_3.51%,rgba(255,255,255,0.00)_111.71%))] hover:shadow-[10.253px_12.303px_20.506px_0px_rgba(0,0,0,0.05)] hover:backdrop-blur-[7.176966667175293px] px-3 py-1 rounded-lg border-solid">
                      Help & Support <span>&gt;</span>
                    </button>
                  </li>
                  <li className="py-2">
                    <button onClick={openModal} className="text-base font-semibold flex w-[282px] justify-between items-center hover:border-[color:var(--strokeglass,rgba(255,255,255,0.50))] hover:[background:var(--fillglass,linear-gradient(113deg,rgba(255,255,255,0.13)_3.51%,rgba(255,255,255,0.00)_111.71%))] hover:shadow-[10.253px_12.303px_20.506px_0px_rgba(0,0,0,0.05)] hover:backdrop-blur-[7.176966667175293px] px-3 py-1 rounded-lg border-solid">
                      Delete Account
                    </button>
                  </li>
                </ul>
                <DeleteAccountModal isOpen={isModalOpen} closeModal={closeModal} />
              </nav>
            </div>
            <div className="flex-1 text-white p-4 mt-5" style={{ transform: 'scale(0.9)', transformOrigin: 'top left', marginLeft: '30px' }}>
              {renderContent()}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Setting;

