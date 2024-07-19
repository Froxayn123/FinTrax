import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DeleteAccountModal from "@/components/All/DeleteAccountModal";
import Sidebar from "@/components/Sidebar";

const AccountInformation = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [updateMessage, setUpdateMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState("/Avatar.png"); // Default avatar URL

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_APP_BASE_API}/token`, { withCredentials: true });
        const newAccessToken = response.data.accessToken;
        setAccessToken(newAccessToken);

        const userDataResponse = await axios.get(`${import.meta.env.VITE_APP_BASE_API}/users`, {
          headers: {
            Authorization: `Bearer ${newAccessToken}`,
          },
        });
        const userData = userDataResponse.data.payload.datas[0];
        setFullname(userData.fullname);
        setEmail(userData.email);
        setPhoneNumber(userData.phone_number);
        setAge(userData.age);
        setCountry(userData.country);
        setAvatarUrl(userData.avatar_url || "/Avatar.png");
      } catch (error) {
        console.error("Failed to fetch access token or user data:", error.response ? error.response.data : error.message);
        navigate("/login");
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUploadPhoto = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("avatar", selectedFile);

    try {
      const response = await axios.put(`${import.meta.env.VITE_APP_BASE_API}/users/profile/photo`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      });
      setUpdateMessage("Your photo has been changed");
      setAvatarUrl(response.data.avatar_url); // Update avatar URL with new URL from the server
      console.log("Photo updated successfully!");
    } catch (error) {
      console.error("Failed to upload photo:", error.response ? error.response.data : error.message);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `${import.meta.env.VITE_APP_BASE_API}/users/profile`,
        {
          fullname: fullname,
          email: email,
          phoneNumber: phoneNumber,
          age: age,
          country: country,
        },
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setUpdateMessage("Your profile has been updated");
      console.log("Profile updated successfully!");
    } catch (error) {
      console.error("Failed to update profile:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Account Information</h2>
      <form className="flex flex-wrap justify-between gap-4" onSubmit={handleSave}>
        <div className="flex flex-col w-full md:w-[calc(50%-0.5rem)] gap-5">
          <div className="flex items-center gap-4">
            <img src={avatarUrl} alt="Profile" className="rounded-full w-16 h-16" />
            <div>
              <input type="file" onChange={handleFileChange} className="flex mb-2 file:bg-transparent file:text-purple-600 file:border file:bg-white file:rounded" />
              <button type="button" onClick={handleUploadPhoto} className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded h-[40px]">
                Change Profile Photo
              </button>
            </div>
          </div>
          <div className="w-full">
            <label className="block mb-1">Name</label>
            <input type="text" className="w-[500px] h-[55px] px-3 py-2 bg-transparent text-white rounded border border-white focus:outline-none focus:border-purple-500" value={fullname} onChange={(e) => setFullname(e.target.value)} />
          </div>
          <div className="w-full">
            <label className="block mb-1">Email</label>
            <input type="email" className="w-[500px] h-[55px] px-3 py-2 bg-transparent text-white rounded border border-white focus:outline-none focus:border-purple-500" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="w-full text-purple-400 cursor-pointer hover:underline">Change Password</div>
          <div className="w-full mt-10">
            <button type="submit" className="w-[250px] h-[55px] bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg">
              Save
            </button>
          </div>
          {updateMessage && <p className="text-green-500">{updateMessage}</p>}
        </div>
        <div className="flex flex-col w-full md:w-[calc(50%-0.5rem)] gap-5 mt-[-1.5rem]">
          <div className="w-full">
            <label className="block mb-1">Phone Number</label>
            <input type="tel" className="w-[500px] h-[55px] px-3 py-2 bg-transparent text-white rounded border border-white focus:outline-none focus:border-purple-500" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </div>
          <div className="w-full">
            <label className="block mb-1">Age</label>
            <select className="w-[500px] h-[55px] px-3 py-2 bg-transparent text-white rounded border border-white focus:outline-none focus:border-purple-500" value={age} onChange={(e) => setAge(e.target.value)}>
              <option className="bg-gray-700 text-white border-purple-500" value="Under 18">
                Under 18
              </option>
              <option className="bg-gray-700 text-white border-purple-500" value="18-24">
                18-24
              </option>
              <option className="bg-gray-700 text-white border-purple-500" value="25-34">
                25-34
              </option>
              <option className="bg-gray-700 text-white border-purple-500" value="35-44">
                35-44
              </option>
              <option className="bg-gray-700 text-white border-purple-500" value="45-54">
                45-54
              </option>
              <option className="bg-gray-700 text-white border-purple-500" value="55-64">
                55-64
              </option>
              <option className="bg-gray-700 text-white border-purple-500" value="65 above">
                65 above
              </option>
            </select>
          </div>
          <div className="w-full">
            <label className="block mb-1">Country</label>
            <select className="w-[500px] h-[55px] px-3 py-2 bg-transparent text-white rounded border border-white focus:outline-none focus:border-purple-500" value={country} onChange={(e) => setCountry(e.target.value)}>
              <option className="bg-gray-700 text-white border-purple-500" value="Indonesia">
                Indonesia
              </option>
              <option className="bg-gray-700 text-white border-purple-500" value="Malaysia">
                Malaysia
              </option>
              <option className="bg-gray-700 text-white border-purple-500" value="Singapore">
                Singapore
              </option>
              <option className="bg-gray-700 text-white border-purple-500" value="Thailand">
                Thailand
              </option>
              <option className="bg-gray-700 text-white border-purple-500" value="Vietnam">
                Vietnam
              </option>
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
      <div className="flex flex-col w-[500px] md:w-[calc(50%-0.5rem)] gap-5 mt-[-1rem]">
        <div className="w-full">
          <label className="block mb-1">Notification</label>
          <select className="w-[500px] h-[55px]  px-3 py-2 bg-transparent text-white rounded border border-white focus:outline-none focus:border-purple-500">
            <option className="bg-gray-700 text-white border-purple-500" value="Push Notification">
              Push Notification
            </option>
            <option className="bg-gray-700 text-white border-purple-500" value="Push Notification">
              Push Notification
            </option>
            <option className="bg-gray-700 text-white border-purple-500" value="Push Notification">
              Push Notification
            </option>
          </select>
        </div>
        <div className="w-full">
          <label className="block mb-1">Currency</label>
          <select className="w-[500px] h-[55px]  px-3 py-2 bg-transparent text-white rounded border border-white focus:outline-none focus:border-purple-500">
            <option className="bg-gray-700 text-white border-purple-500" value="Rupia">
              Rupia
            </option>
            <option className="bg-gray-700 text-white border-purple-500" value="Ringgit">
              Euro
            </option>
            <option className="bg-gray-700 text-white border-purple-500" value="Dolar">
              Dolar
            </option>
          </select>
        </div>
        <div className="w-full">
          <label className="block mb-1">Text Font</label>
          <select className="w-[500px] h-[55px]  px-3 py-2 bg-transparent text-white rounded border border-white focus:outline-none focus:border-purple-500">
            <option className="bg-gray-700 text-white border-purple-500" value="100%">
              100%
            </option>
            <option className="bg-gray-700 text-white border-purple-500" value="75%">
              75%
            </option>
            <option className="bg-gray-700 text-white border-purple-500" value="50%">
              50%
            </option>
            <option className="bg-gray-700 text-white border-purple-500" value="25%">
              25%
            </option>
          </select>
        </div>
      </div>
      <div className="flex flex-col w-full md:w-[calc(50%-0.5rem)] gap-5 mt-[-1rem]">
        <div className="w-full">
          <label className="block mb-1">Themes</label>
          <select className="w-[500px] h-[55px]  px-3 py-2 bg-transparent text-white rounded border border-white focus:outline-none focus:border-purple-500">
            <option className="bg-gray-700 text-white border-purple-500" value="Default System">
              Default System
            </option>
            <option className="bg-gray-700 text-white border-purple-500" value="Default System">
              Dark System
            </option>
          </select>
        </div>
        <div className="w-full text-purple-400 cursor-pointer underline mt-[-5]">Repeat the personalized questionnaire</div>
      </div>
    </form>
  </div>
);

const Subscribe = () => (
  <div>
    <div className="flex flex-col items-center">
      <img src="/Sub.png" alt="Profile" className="w-42 h-42 mb-4" />
      <h2 className="text-2xl font-medium mb-4">You Haven{"'"}t subscribed yet :</h2>
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
            <option className="bg-gray-700 text-white border-purple-500" value="How do I track my expenses?">
              How do I track my expenses?
            </option>
            <option className="bg-gray-700 text-white border-purple-500" value="">
              -
            </option>
          </select>
        </div>

        <div className="w-full mb-6  border-[var(--Letter-spacing-Letter-spacing,] border-[solid_var(--strokeglass,rgba(255,255,255,0.50))] [background:var(--fillglass,linear-gradient(113deg,rgba(255,255,255,0.13)_3.51%,rgba(255,255,255,0.00)_111.71%))] shadow-[10.253px_12.303px_20.506px_0px_rgba(0,0,0,0.05)] backdrop-blur-[7.176966667175293px]">
          <select className="w-full rounded-[var(--4,4px)] px-3 py-2 bg-transparent text-white  focus:outline-none focus:border-purple-500">
            <option className="bg-gray-700 text-white border-purple-500" value="What should I do if I encounter a bug or technical issue?">
              What should I do if I encounter a bug or technical issue?
            </option>
            <option className="bg-gray-700 text-white border-purple-500" value="">
              -
            </option>
          </select>
        </div>

        <div className="w-full mb-6  border-[var(--Letter-spacing-Letter-spacing,] border-[solid_var(--strokeglass,rgba(255,255,255,0.50))] [background:var(--fillglass,linear-gradient(113deg,rgba(255,255,255,0.13)_3.51%,rgba(255,255,255,0.00)_111.71%))] shadow-[10.253px_12.303px_20.506px_0px_rgba(0,0,0,0.05)] backdrop-blur-[7.176966667175293px]">
          <select className="w-full rounded-[var(--4,4px)] px-3 py-2 bg-transparent text-white  focus:outline-none focus:border-purple-500">
            <option className="bg-gray-700 text-white border-purple-500" value="How can I upgrade my subscription plan?">
              How can I upgrade my subscription plan?
            </option>
            <option className="bg-gray-700 text-white border-purple-500" value="">
              -
            </option>
          </select>
        </div>

        <div className="w-full mb-6  border-[var(--Letter-spacing-Letter-spacing,] border-[solid_var(--strokeglass,rgba(255,255,255,0.50))] [background:var(--fillglass,linear-gradient(113deg,rgba(255,255,255,0.13)_3.51%,rgba(255,255,255,0.00)_111.71%))] shadow-[10.253px_12.303px_20.506px_0px_rgba(0,0,0,0.05)] backdrop-blur-[7.176966667175293px]">
          <select className="w-full rounded-[var(--4,4px)] px-3 py-2 bg-transparent text-white  focus:outline-none focus:border-purple-500">
            <option className="bg-gray-700 text-white border-purple-500" value="Can I set savings goals?">
              Can I set savings goals?
            </option>
            <option className="bg-gray-700 text-white border-purple-500" value="">
              -
            </option>
          </select>
        </div>
      </div>
    </form>
    <h2 className="text-2xl font-semibold mb-4 mt-5">Contact Support</h2>
    <form>
      <div className="mb-4 flex space-x-4">
        <div className="w-1/2 ">
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">
            Email
          </label>
          <input type="email" className="w-full px-3 py-2 bg-transparent text-white rounded border border-white focus:outline-none focus:border-purple-500" value="silviputri@gmail.com" />
        </div>
        <div className="w-1/2 ">
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">
            Name
          </label>
          <input type="text" className="w-full px-3 py-2 bg-transparent text-white rounded border border-white focus:outline-none focus:border-purple-500" value="Silvi Putri" />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-gray-300">
          Message
        </label>
        <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 bg-transparent text-white rounded border border-white focus:outline-none focus:border-purple-500" placeholder="Tell us your problem"></textarea>
      </div>
      <button type="submit" className="bg-purple-600 h-[55px] w-[250px] hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg">
        Submit
      </button>
    </form>
    <div className="mt-8">
      <p className="text-gray-400">
        Live Chat:{" "}
        <a href="#" className="text-indigo-400 hover:underline">
          [Link to initiate chat]
        </a>
      </p>
      <p className="text-gray-400">
        Download User Guide:{" "}
        <a href="#" className="text-indigo-400 hover:underline">
          [Link to PDF]
        </a>
      </p>
    </div>
  </div>
);

const Setting = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState("AccountInformation");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const renderContent = () => {
    switch (activeComponent) {
      case "AccountInformation":
        return <AccountInformation />;
      case "Preference":
        return <Preference />;
      case "Subscribe":
        return <Subscribe />;
      case "Help":
        return <Help />;
      default:
        return <AccountInformation />;
    }
  };

  return (
    <div className="min-h-screen [background:var(--Blue-100,#001833)] text-white font-sans flex">
      <Sidebar />
      <main className="flex-1 pl-16 pr-16 mt-10">
        <section className="grid grid-cols-4 gap-2">
          <div className="col-span-4 p-4 relative flex items-center justify-between w-full [background:linear-gradient(113deg,rgba(255,255,255,0.13)_3.51%,rgba(255,255,255,0.00)_111.71%)] shadow-[10.253px_12.303px_20.506px_0px_rgba(0,0,0,0.05)] backdrop-blur-[7.176966667175293px] rounded-[15px] border-[1.23px] border-solid border-[rgba(255,255,255,0.50)]">
            <div className="flex flex-col items-center gap-2 self-stretch pr-4 border-r-[color:var(--Placeholder,#797979)] pt-8 pb-16 border-r border-solid">
              <nav>
                <ul>
                  <li className="py-2">
                    <button
                      onClick={() => setActiveComponent("AccountInformation")}
                      className="text-base font-semibold flex w-[282px] justify-between items-center hover:border-[color:var(--strokeglass,rgba(255,255,255,0.50))] hover:[background:var(--fillglass,linear-gradient(113deg,rgba(255,255,255,0.13)_3.51%,rgba(255,255,255,0.00)_111.71%))] hover:shadow-[10.253px_12.303px_20.506px_0px_rgba(0,0,0,0.05)] hover:backdrop-blur-[7.176966667175293px] px-3 py-1 rounded-lg border-solid"
                    >
                      Account Information{" "}
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right ml-auto" viewBox="0 0 16 16">
                        <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                      </svg>
                    </button>
                  </li>
                  <li className="py-2">
                    <button
                      onClick={() => setActiveComponent("Preference")}
                      className="text-base font-semibold flex w-[282px] justify-between items-center hover:border-[color:var(--strokeglass,rgba(255,255,255,0.50))] hover:[background:var(--fillglass,linear-gradient(113deg,rgba(255,255,255,0.13)_3.51%,rgba(255,255,255,0.00)_111.71%))] hover:shadow-[10.253px_12.303px_20.506px_0px_rgba(0,0,0,0.05)] hover:backdrop-blur-[7.176966667175293px] px-3 py-1 rounded-lg border-solid"
                    >
                      Preference
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right ml-auto" viewBox="0 0 16 16">
                        <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                      </svg>
                    </button>
                  </li>
                  <li className="py-2">
                    <button
                      onClick={() => setActiveComponent("Subscribe")}
                      className="text-base font-semibold flex w-[282px] justify-between items-center hover:border-[color:var(--strokeglass,rgba(255,255,255,0.50))] hover:[background:var(--fillglass,linear-gradient(113deg,rgba(255,255,255,0.13)_3.51%,rgba(255,255,255,0.00)_111.71%))] hover:shadow-[10.253px_12.303px_20.506px_0px_rgba(0,0,0,0.05)] hover:backdrop-blur-[7.176966667175293px] px-3 py-1 rounded-lg border-solid"
                    >
                      Subscribe{" "}
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right ml-auto" viewBox="0 0 16 16">
                        <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                      </svg>
                    </button>
                  </li>
                  <li className="py-2">
                    <button
                      onClick={() => setActiveComponent("Help")}
                      className="text-base font-semibold flex w-[282px] justify-between items-center hover:border-[color:var(--strokeglass,rgba(255,255,255,0.50))] hover:[background:var(--fillglass,linear-gradient(113deg,rgba(255,255,255,0.13)_3.51%,rgba(255,255,255,0.00)_111.71%))] hover:shadow-[10.253px_12.303px_20.506px_0px_rgba(0,0,0,0.05)] hover:backdrop-blur-[7.176966667175293px] px-3 py-1 rounded-lg border-solid"
                    >
                      Help & Support{" "}
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right ml-auto" viewBox="0 0 16 16">
                        <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                      </svg>
                    </button>
                  </li>
                  <li className="py-2">
                    <button
                      onClick={openModal}
                      className="text-base font-semibold flex w-[282px] justify-between items-center hover:border-[color:var(--strokeglass,rgba(255,255,255,0.50))] hover:[background:var(--fillglass,linear-gradient(113deg,rgba(255,255,255,0.13)_3.51%,rgba(255,255,255,0.00)_111.71%))] hover:shadow-[10.253px_12.303px_20.506px_0px_rgba(0,0,0,0.05)] hover:backdrop-blur-[7.176966667175293px] px-3 py-1 rounded-lg border-solid"
                    >
                      Delete Account
                    </button>
                  </li>
                </ul>
                <DeleteAccountModal isOpen={isModalOpen} closeModal={closeModal} />
              </nav>
            </div>
            <div className="flex-1 text-white p-4 mt-5" style={{ transform: "scale(0.9)", transformOrigin: "top left", marginLeft: "30px" }}>
              {renderContent()}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Setting;
