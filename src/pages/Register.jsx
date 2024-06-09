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
  const [passwordMismatch, setPasswordMismatch] = useState(false); // State untuk menandai jika password dan konfirmasi tidak cocok
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
                <input
                  type="text"
                  placeholder="Enter Your Full Name"
                  className="w-full px-4 py-2 rounded-lg pl-10 mb-4 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                />
              </div>
              <div className="flex w-full items-center text-sm relative">
                <input
                  type="text"
                  placeholder="Enter Your Username"
                  className="w-full px-4 py-2 rounded-lg pl-10 mb-4 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="flex w-full items-center text-sm relative">
                <input
                  type="tel"
                  placeholder="Enter Your Phone Number"
                  className="w-full px-4 py-2 rounded-lg pl-10 mb-4 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  value={phone_number}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="flex w-full items-center text-sm relative">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full px-4 py-2 rounded-lg pl-10 mb-4 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex w-full items-center text-sm relative">
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="w-full px-4 py-2 rounded-lg pl-10 mb-4 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex w-full mb-6 items-center text-sm relative">
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
