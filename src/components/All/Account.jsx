import { Link } from "react-router-dom";

const Account = () => {
  return (
    <section id="general" className="mb-6 mt-4 mr-5 ml-5">
      <div className="border-b-2 pb-2 border-[#797979]">
        <h1 className="text-4xl text-white font-semibold mb-2">Account</h1>
        <h3 className="text-xl text-white">Get notified what’s happening right now. You can turn off ata any time.</h3>
      </div>
      <div className="mt-6">
        <div className="flex space-x-10 mt-6">
          <div className="flex items-center gap-5 px-16 mr-11">
            <img src="/Avatar.png" alt="Profile" className="rounded-full w-20 h-20" />
            <button className="bg-[#8F19BD] hover:bg-purple-700 text-white py-[10px] px-[24px] rounded-xl">Change Profile</button>
          </div>
          <div className="flex-1">
            <label className="block text-white text-xl mb-2">First Name</label>
            <input type="text" id="First Name" placeholder="Melinda" className="w-full py-[8px] px-[16px] text-white text-lg border bg-transparent placeholder-white border-white rounded-md" />
          </div>
          <div className="flex-1">
            <label className="block text-white text-xl mb-2">Last Name</label>
            <input type="text" id="Last Name" placeholder="Kusuma" className="w-full py-[8px] px-[16px] text-white text-lg border bg-transparent placeholder-white border-white rounded-md" />
          </div>
        </div>
        <div className="flex space-x-10 mt-6">
          <div className="flex-1">
            <label className="block text-white text-xl mb-2">Phone Number</label>
            <input type="tel" id="Phone Number" placeholder="+62 88765432109" className="w-full py-[8px] px-[16px] text-white text-lg border bg-transparent placeholder-white border-white rounded-md" />
          </div>
          <div className="flex-1">
            <label className="block text-white text-xl mb-2">Email</label>
            <input type="email" id="email" placeholder="melinda@gmail.com" className="w-full py-[8px] px-[16px] text-white text-lg border bg-transparent placeholder-white border-white rounded-md" />
          </div>
          <div className="flex-1">
            <label className="block text-white text-xl mb-2" htmlFor="country">
              Country
            </label>
            <select id="country" className="w-full py-[8px] px-[16px] text-white text-lg border bg-transparent placeholder-white border-white rounded-md">
              <option value="" className="text-black">
                Select Country
              </option>
              <option value="id" className="text-black">
                Indonesia
              </option>
              <option value="ca" className="text-black">
                Canada
              </option>
              <option value="uk" className="text-black">
                United Kingdom
              </option>
              <option value="au" className="text-black">
                Australia
              </option>
              <option value="fr" className="text-black">
                France
              </option>
              <option value="de" className="text-black">
                Germany
              </option>
              {/* Tambahkan opsi lainnya sesuai kebutuhan */}
            </select>
          </div>
        </div>
        <div className="flex space-x-10 mt-6">
          <div className="flex-1">
            <label className="block text-white text-xl mb-2">City</label>
            <input type="text" id="city" placeholder="Jakarta" className="w-full py-[8px] px-[16px] text-white text-lg border bg-transparent placeholder-white border-white rounded-md" />
          </div>
          <div className="flex-1">
            <label className="block text-white text-xl mb-2">Street</label>
            <input type="text" id="street" placeholder="Perintis Kemerdekaan" className="w-full py-[8px] px-[16px] text-white text-lg border bg-transparent placeholder-white border-white rounded-md" />
          </div>
          <div className="flex-1">
            <label className="block text-white text-xl mb-2">Postcode</label>
            <input type="text" id="postcode" placeholder="52361" className="w-full py-[8px] px-[16px] text-white text-lg border bg-transparent placeholder-white border-white rounded-md" />
          </div>
        </div>
      </div>
      <div className="cursor-pointer mt-[16px]">
        <Link to="/ForgotPassword" className="text-[#CD37FF] hover:underline text-[14px]">
          Change Password
        </Link>
      </div>
      <div className="mt-[48px]">
        <button type="submit" className="bg-[#8F19BD] hover:bg-purple-700 text-white py-[6px] px-[24px] rounded-xl">
          Save
        </button>
      </div>
    </section>
  );
};

export default Account;
