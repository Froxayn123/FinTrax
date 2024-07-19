import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthPageLayout from "@/components/layout/AuthPageLayout";
import TextInput from "@/components/ui/TextInput";
import UserIcon from "@/components/svg/UserIcon";
import PhoneIcon from "@/components/svg/PhoneIcon";
import MailIcon from "@/components/svg/MailIcon";
import LockIcon from "@/components/svg/LockIcon";
import Button from "@/components/ui/Button";
import Wallet from "/assets/Wallet.png";

const Register = () => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_APP_BASE_API}/register`, {
        fullname: fullname,
        username: username,
        phone_number: phoneNumber,
        email: email,
        password: password,
        confPassword: confirmPassword,
      });
      navigate(`/verification`);
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
      }
    }
  };

  return (
    <>
      <AuthPageLayout>
        <div className="flex justify-center items-center h-screen">
          <div className="w-[1100px] h-[750px] p-16 flex justify-center items-center bg-none bg-blue-500 bg-opacity-20 rounded-[36px] space-x-6">
            <div className="w-1/2 space-y-6">
              <h2 className="text-[45px] font-medium font-['Roboto'] leading-[52px] text-white">
                <span className="font-extrabold italic">New</span> to our website? No problem! <span className="font-extrabold italic">Sign up now.</span>
              </h2>
              <img src={Wallet} alt="Wallet.png" className="w-[400px]" />
            </div>
            <form onSubmit={handleRegister} className="flex flex-col w-1/2 rounded-2xl p-10 justify-center items-center bg-gradient-to-br from-white/20 to-transparent backdrop-blur-[14.35px] space-y-[16px]">
              <h3 className="text-3xl text-white font-bold text-center">Register</h3>
              <p className="text-center text-red-600">{message}</p>
              <TextInput type="text" svg={UserIcon("fill-[#718096]")} placeholder="Enter Your Full Name" value={fullname} onChange={(e) => setFullname(e.target.value)} />
              <TextInput type="text" svg={UserIcon("fill-[#718096]")} placeholder="Enter Your Full Username" value={username} onChange={(e) => setUsername(e.target.value)} />
              <TextInput type="text" svg={PhoneIcon("fill-[#718096]")} placeholder="Enter Your Phone Number" value={phoneNumber} onChange={(e) => setPhone(e.target.value)} />
              <TextInput type="email" svg={MailIcon("fill-[#718096]")} placeholder="Enter Your E-Mail" value={email} onChange={(e) => setEmail(e.target.value)} />
              <TextInput type="password" svg={LockIcon("fill-[#718096]")} placeholder="Enter Your Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <TextInput type="password" svg={LockIcon("fill-[#718096]")} placeholder="Enter Your Retype Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              <Button type="submit" size="w-full" title="Register" />
              <p className="text-white mt-0 text-center">
                Or already have an account?{" "}
                <Link to="/login" className="text-[#CD37FF] hover:underline">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </AuthPageLayout>
    </>
  );
};

export default Register;
