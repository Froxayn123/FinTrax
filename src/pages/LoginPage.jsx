import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthPageLayout from "@/components/layout/AuthPageLayout";
import TextInput from "@/components/ui/TextInput";
import MailIcon from "@/components/svg/MailIcon";
import LockIcon from "@/components/svg/LockIcon";
import Button from "@/components/ui/Button";
import Card from "/assets/Card.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${import.meta.env.VITE_APP_BASE_API}/login`, {
        email: email,
        password: password,
      });
      navigate("/");
    } catch (error) {
      setMessage(error.response.data.payload.message);
    }
  };

  return (
    <AuthPageLayout>
      <div className="flex justify-center items-center h-screen">
        <div className="w-[1100px] h-[750px] p-16 flex justify-center items-center bg-none bg-blue-500 bg-opacity-20 rounded-[36px]">
          <div className="w-1/2 space-y-6">
            <h2 className="text-[45px] font-medium font-['Roboto'] leading-[52px] text-white">
              Helping You Achieve <span className="font-extrabold italic">Your Financial Future</span>, One <span className="font-extrabold italic">Transaction</span> at a Time.
            </h2>
            <img src={Card} alt="Card.png" className="w-[400px]" />
          </div>
          <form onSubmit={handleLogin} className="flex flex-col w-1/2 h-[500px] rounded-2xl p-10 justify-center items-center bg-gradient-to-br from-white/20 to-transparent backdrop-blur-[14.35px] space-y-[32px]">
            <h3 className="text-3xl text-white font-bold text-center">Login</h3>
            <p className="text-center text-red-600">{message}</p>
            <TextInput type="email" svg={MailIcon("fill-[#718096]")} placeholder="Enter Your E-Mail" value={email} onChange={(e) => setEmail(e.target.value)} />
            <TextInput type="password" svg={LockIcon("fill-[#718096]")} placeholder="Enter Your Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Link to="/forgot" className="w-full text-[#CD37FF] hover:underline text-sm text-end">
              Forgot Password ?
            </Link>
            <Button type="submit" size="w-full" title="Login" />
            <p className="mt-4 text-sm text-white">
              Don{"'"}t have an account?{" "}
              <Link to="/register" className="text-[#CD37FF] hover:underline">
                Register here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </AuthPageLayout>
  );
};

export default Login;
