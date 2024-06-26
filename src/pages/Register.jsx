import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [phone_number, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordMismatch(true);
      return;
    }
    
    try {
      const registrationData = {
        fullname: fullname,
        username: username,
        phone_number: phone_number,
        email: email,
        password: password,
        confPassword: confirmPassword,
      };
      console.log("Sending Registration Data:", registrationData); 
      const response = await axios.post(
        `${import.meta.env.VITE_APP_BASE_API}/register`,
        registrationData,
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        }
      );
      console.log(response.data);
      navigate("/verifikasi");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };
  

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${isMobile ? "bg-MobileLogin.jpg" : "BGLogin.jpg"})` }}>
        <div className="max-w-4xl w-full p-4 sm:p-8 bg-none sm:bg-blue-500 sm:bg-opacity-20 sm:shadow-xl rounded-3xl flex flex-col sm:flex-row items-center">
          <div className="hidden sm:block flex-none sm:pr-8 mb-4 sm:mb-0">
            <h2 className="text-2xl sm:text-3xl text-white font-bold mb-8 sm:mb-16 mr-1 text-center sm:text-left">
              New to our website?
              <br /> No problem! Sign up
              <br />
              now
            </h2>
            <div className="flex justify-center mb-4">
              <img src="/dompet.png" alt="Wallet" className="h-auto max-h-72" />
            </div>
          </div>
          <form onSubmit={handleRegister} className="flex-1 w-96 sm:bg-white sm:bg-opacity-5 bg-[#007AFF] bg-opacity-20 min-h-auto rounded-xl p-4 sm:p-8 justify-center items-center">
            <h3 className="text-3xl text-white font-bold mb-4 text-center">Register</h3>
            <div className="p-5">
              <div className="flex w-full items-center text-sm relative">
              <svg className="absolute left-2 bottom-4 transform -translate-y-1/2" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{ fill: "#718096" }}>
                  <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path>
                </svg>
                <input
                  type="text"
                  placeholder="Enter Your Full Name"
                  className="w-full px-4 py-2 rounded-lg pl-10 mb-4 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                />
              </div>
              <div className="flex w-full items-center text-sm relative">
              <svg className="absolute left-2 bottom-4 transform -translate-y-1/2" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{ fill: "#718096" }}>
                  <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path>
                </svg>
                <input
                  type="text"
                  placeholder="Enter Your Username"
                  className="w-full px-4 py-2 rounded-lg pl-10 mb-4 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="flex w-full items-center text-sm relative">
              <svg className="absolute left-2 bottom-4 transform -translate-y-1/2" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{ fill: "#718096" }}>
                  <path d="M17.707 12.293a.999.999 0 0 0-1.414 0l-1.594 1.594c-.739-.22-2.118-.72-2.992-1.594s-1.374-2.253-1.594-2.992l1.594-1.594a.999.999 0 0 0 0-1.414l-4-4a.999.999 0 0 0-1.414 0L3.581 5.005c-.38.38-.594.902-.586 1.435.023 1.424.4 6.37 4.298 10.268s8.844 4.274 10.269 4.298h.028c.528 0 1.027-.208 1.405-.586l2.712-2.712a.999.999 0 0 0 0-1.414l-4-4.001zm-.127 6.712c-1.248-.021-5.518-.356-8.873-3.712-3.366-3.366-3.692-7.651-3.712-8.874L7 4.414 9.586 7 8.293 8.293a1 1 0 0 0-.272.912c.024.115.611 2.842 2.271 4.502s4.387 2.247 4.502 2.271a.991.991 0 0 0 .912-.271L17 14.414 19.586 17l-2.006 2.005z"></path>
                </svg>
                <input
                  type="tel"
                  placeholder="Enter Your Phone Number"
                  className="w-full px-4 py-2 rounded-lg pl-10 mb-4 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  value={phone_number}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="flex w-full items-center text-sm relative">
              <svg className="absolute left-2 bottom-4 transform -translate-y-1/2" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{ fill: "#718096" }}>
                  <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path>
                </svg>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full px-4 py-2 rounded-lg pl-10 mb-4 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex w-full items-center text-sm relative">
              <svg className="absolute left-2 bottom-4 transform -translate-y-1/2" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{ fill: "#718096" }}>
                  <path d="M12 2C9.243 2 7 4.243 7 7v2H6c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v2H9V7zm9.002 13H13v-2.278c.595-.347 1-.985 1-1.722 0-1.103-.897-2-2-2s-2 .897-2 2c0 .736.405 1.375 1 1.722V20H6v-9h12l.002 9z"></path>
                </svg>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="w-full px-4 py-2 rounded-lg pl-10 mb-4 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex w-full mb-6 items-center text-sm relative">
                <svg className="absolute left-2 bottom-4 transform -translate-y-1/2" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{ fill: "#718096" }}>
                  <path d="M12 2C9.243 2 7 4.243 7 7v2H6c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v2H9V7zm9.002 13H13v-2.278c.595-.347 1-.985 1-1.722 0-1.103-.897-2-2-2s-2 .897-2 2c0 .736.405 1.375 1 1.722V20H6v-9h12l.002 9z"></path>
                </svg>
                <input
                  type="password"
                  placeholder="Enter Your Retype Password"
                  className="w-full px-4 py-2 rounded-lg pl-10 mb-4 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              {passwordMismatch && <p className="text-red-500 mb-4 text-sm">Password and Confirm Password do not match</p>}
              <button type="submit" className="text-white w-full px-4 py-2 rounded-lg pl-10 mb-4 transition-colors duration-300" style={{ background: "linear-gradient(to right, #4E2DD1 50%, #8C3FD9 100%)" }}>
                Register
              </button>
              <p className="text-white mt-0 text-center">
                Or already have an account?{" "}
                <Link to="/login" className="text-[#CD37FF] hover:underline">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
