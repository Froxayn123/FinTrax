import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("Email:", email);
    navigate("/ResetPassword");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url("BGLogin.jpg")` }}>
      <div className="max-w-2xl w-full h-96 p-8 bg-blue-500 bg-opacity-20 shadow-xl rounded-3xl flex flex-col items-center">
        <h1 className="text-5xl text-white font-semibold mb-4 mt-3">Forgot Password ?</h1>
        <p className="text-lg text-center text-white mb-10">Enter your email to reset your password.</p>
        <div className="flex w-2/3 items-center text-lg relative mb-10">
          <input type="email" placeholder="Please enter your email address" className="w-full border rounded-lg py-2 px-3 pl-5" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button className="w-2/3 text-white font-semibold py-2 px-4 rounded-lg mb-4" style={{ background: "linear-gradient(to right, #4E2DD1 50%, #8C3FD9 100%)" }} onClick={handleSubmit}>
          Submit
        </button>
        <Link to="/login" className="text-[#CD37FF] hover:underline">
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
