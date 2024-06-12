import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import LogoNavbar from "../assets/LogoNavbar";
import NavList from "../assets/NavList";

const NavbarHome = () => {
  const [userData, setUserData] = useState(null);
  const [accessToken, setAccessToken] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAccessToken = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_APP_BASE_API}/token`, { withCredentials: true });
        setAccessToken(response.data.accessToken);
      } catch (error) {
        console.error("Failed to fetch access token:", error.response ? error.response.data : error.message);
        navigate("/login");
      }
    };

    const fetchUserData = async (token) => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_APP_BASE_API}/users`, {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data.payload.datas[0]);
      } catch (error) {
        console.error("Failed to fetch user data:", error.response ? error.response.data : error.message);
      }
    };

    if (accessToken) {
      fetchUserData(accessToken);
    } else {
      fetchAccessToken();
    }
  }, [navigate, accessToken]);

  return (
    <div className="fixed start-[100px] end-[100px] top-[32px] py-[16px] px-[32px] flex justify-between items-center backdrop-blur-[65px] bg-[#1C1C1D0D] rounded-[16px]">
      <LogoNavbar />
      <NavList />
      <Link to="/overview">
        <button className="flex items-center rounded-full font-roboto capitalize text-[#ECEFF5] hover:bg-[#8C3FD9] hover:border-[#8C3FD9] hover:drop-shadow-[0px_3px_3px_rgba(0,0,0,0.75)] transition-all ease-in-out duration-300">
          <img src={userData?.avatar_url || "/Avatar2.png"} alt="User Avatar" className="w-12 h-12 rounded-full" />
        </button>
      </Link>
    </div>
  );
};

export default NavbarHome;
