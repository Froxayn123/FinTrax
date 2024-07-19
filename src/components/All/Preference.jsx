import CardMode from "@/components/ui/CardMode";

const Preference = () => {
  const handleCardClick = (mode) => {
    alert(`${mode} card clicked!`);
  };

  return (
    <section id="general" className="mb-6 mt-4 mr-5 ml-5">
      <div className="border-b-2 pb-2 border-[#797979]">
        <h1 className="text-4xl text-white font-semibold mb-2">Preferences</h1>
        <h3 className="text-xl text-white">Customization according to your preferences</h3>
      </div>
      <div className="mt-6">
        <label className="block text-white text-2xl mb-2" htmlFor="Theme">
          Select Theme
        </label>
        <div className="flex space-x-4">
          <CardMode imageSrc="/DarkMode.jpg" label="Dark Mode Card" onClick={() => handleCardClick("Dark Mode")} darkMode={true} />
          <CardMode imageSrc="/LightMode.jpg" label="Light Mode Card" onClick={() => handleCardClick("Light Mode")} darkMode={false} />
        </div>
      </div>
      <div className="mt-6">
        <div className="flex space-x-10 mt-6">
          <div className="flex-1">
            <label className="block text-white text-xl mb-2" htmlFor="Language">
              Language
            </label>
            <select id="Language" className="w-full py-[8px] px-[16px] text-white text-lg border bg-transparent placeholder-white border-white rounded-md">
              <option value="" className="text-black">
                Select Language
              </option>
              <option value="id" className="text-black">
                Indonesia
              </option>
              <option value="English" className="text-black">
                English
              </option>
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-white text-xl mb-2" htmlFor="Currency">
              Currency
            </label>
            <select id="Currency" className="w-full py-[8px] px-[16px] text-white text-lg border bg-transparent placeholder-white border-white rounded-md">
              <option value="" className="text-black">
                Select Currency
              </option>
              <option value="id" className="text-black">
                Rupiah
              </option>
              <option value="Er" className="text-black">
                Euro
              </option>
              <option value="Dl" className="text-black">
                Dollar
              </option>
            </select>
          </div>
        </div>
        <div className="flex space-x-10 mt-6">
          <div className="flex-1">
            <label className="block text-white text-xl mb-2" htmlFor="Time Zone">
              Time Zone
            </label>
            <select id="Time Zone" className="w-full py-[8px] px-[16px] text-white text-lg border bg-transparent placeholder-white border-white rounded-md">
              <option value="" className="text-black">
                Select Time Zone
              </option>
              <option value="Pt" className="text-black">
                (UTC - 08:00) Pacific Time
              </option>
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-white text-xl mb-2" htmlFor="Text Font">
              Text Font
            </label>
            <select id="Text Font" className="w-full py-[8px] px-[16px] text-white text-lg border bg-transparent placeholder-white border-white rounded-md">
              <option value="" className="text-black">
                Select Text Font
              </option>
              <option value="100" className="text-black">
                100%
              </option>
              <option value="70" className="text-black">
                70%
              </option>
              <option value="50" className="text-black">
                50%
              </option>
            </select>
          </div>
        </div>
        <div className="flex mt-6 mr-10 ">
          <div className="w-1/2">
            <label className="block text-white text-xl mb-2" htmlFor="Notification">
              Notification
            </label>
            <select id="Notification" className="w-full py-[8px] px-[16px] text-white text-lg border bg-transparent placeholder-white border-white rounded-md">
              <option value="" className="text-black">
                Select Notification
              </option>
              <option value="id" className="text-black">
                Push Notification
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <div className="flex space-x-10 mt-6">
          <div className="flex-1">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox bg-transparent border-2 border-[#8F19BD]" />
              <span className="ml-4 text-white">
                <h3 className="flex text-xl">News and Update Settings</h3>
                <p className="text-sm">The lates news about the lates features and software update settings</p>
              </span>
            </label>
          </div>
          <div className="flex-1">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox bg-transparent border-2 border-[#8F19BD]" />
              <span className="ml-4 text-white">
                <h3 className="flex text-xl">Offers & Promotions</h3>
                <p className="text-sm">Receive notifications about special offers, promotions, and discounts.</p>
              </span>
            </label>
          </div>
        </div>
        <div className="flex space-x-10 mt-6">
          <div className="flex-1">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox bg-transparent border-2 border-[#8F19BD]" />
              <span className="ml-4 text-white">
                <h3 className="flex text-xl">Tips and Articles</h3>
                <p className="text-sm">Get notifications for new financial tips, articles, and educational content.</p>
              </span>
            </label>
          </div>
          <div className="flex-1">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox bg-transparent border-2 border-[#8F19BD]" />
              <span className="ml-4 text-white">
                <h3 className="flex text-xl">Activity</h3>
                <p className="text-sm">Get notified about activities such as creating budgets, setting reminders, and other account-related actions.</p>
              </span>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Preference;
