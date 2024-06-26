import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

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

  const handleSubmit = () => {
    console.log("Email:", email);
    navigate("/ResetPassword");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${isMobile ? "bg-MobileLogin.jpg" : "BGLogin.jpg"})` }}>
      <div className="sm:max-w-2xl w-96 sm:w-full h-96 p-4 sm:p-8 bg-blue-500 bg-opacity-20 shadow-xl rounded-3xl flex flex-col items-center">
        <h1 className="sm:text-5xl text-4xl text-white font-semibold mb-4 mt-3">Forgot Password ?</h1>
        <p className="sm:text-lg text-sm text-center text-white mb-10">Enter your email to reset your password.</p>
        <div className="flex w-2/3 items-center text-lg relative mb-10">
          <input type="email" placeholder="Please enter your email address" className="w-full border rounded-lg py-2 px-3 sm:pl-5" value={email} onChange={(e) => setEmail(e.target.value)} />
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
