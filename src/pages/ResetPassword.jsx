import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  const evaluatePasswordStrength = (password) => {
    let strength = "";
    if (password.length >= 8) {
      if (/[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password) && /[\W_]/.test(password)) {
        strength = "Strong";
      } else if ((/[A-Z]/.test(password) || /[a-z]/.test(password)) && /\d/.test(password)) {
        strength = "Medium";
      } else {
        strength = "Weak";
      }
    } else {
      strength = "Too short";
    }
    return strength;
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setNewPassword(password);
    setPasswordStrength(evaluatePasswordStrength(password));
  };

  const handleReset = () => {
    if (newPassword === confirmPassword) {
      console.log("New Password:", newPassword);
      navigate("/login");
    } else {
      alert("Passwords do not match");
    }
  };

  const getProgressColor = (strength) => {
    switch (strength) {
      case "Strong":
        return "bg-green-500";
      case "Medium":
        return "bg-yellow-500";
      case "Weak":
        return "bg-red-500";
      case "Too short":
        return "bg-gray-500";
      default:
        return "bg-gray-500";
    }
  };

  const getProgressWidth = (strength) => {
    switch (strength) {
      case "Strong":
        return "w-full";
      case "Medium":
        return "w-2/3";
      case "Weak":
        return "w-1/3";
      case "Too short":
        return "w-1/4";
      default:
        return "w-1/4";
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${isMobile ? "bg-MobileLogin.jpg" : "BGLogin.jpg"})` }}>
      <div className="sm:max-w-2xl sm:w-full sm:p-8 p-4 bg-blue-500 bg-opacity-20 shadow-xl rounded-3xl flex flex-col items-center">
        <h1 className="sm:text-5xl text-4xl text-white font-semibold mb-2">Setup New Password</h1>
        <p className="mb-4 sm:text-lg text-white">
          Have you already reset the password ?{" "}
          <Link to="/register" className="text-[#CD37FF] hover:underline">
            Sign in
          </Link>
        </p>
        <div className="flex w-3/4 items-center text-lg relative mb-2">
          <input type="password" placeholder="Password" className="w-full border rounded-lg py-2 px-3 pl-5" value={newPassword} onChange={handlePasswordChange} />
        </div>
        <div className="w-3/4 text-white mb-4">
          <div className="relative w-full h-2 rounded bg-gray-300 mt-2 mb-2">
            <div className={`absolute top-0 left-0 h-2 rounded ${getProgressColor(passwordStrength)} ${getProgressWidth(passwordStrength)}`}></div>
          </div>
          <p className="text-sm text-white">Use 8 or more characters with a mix of letters, numbers & symbols.</p>
        </div>
        <div className="flex w-3/4 items-center text-lg relative mb-4">
          <input type="password" placeholder="Repeat Password" className="w-full border rounded-lg py-2 px-3 pl-5" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        <div className="w-3/4 flex items-center mb-4">
          <input type="checkbox" id="terms" checked={termsAccepted} onChange={() => setTermsAccepted(!termsAccepted)} className="mr-2" />
          <label htmlFor="terms" className="text-white sm:text-sm">I Accept the Terms</label>
        </div>
        <button
          className={`w-3/4 text-white font-bold py-2 px-4 mb-2 rounded-lg ${termsAccepted ? "" : "opacity-50 cursor-not-allowed"}`}
          style={{ background: "linear-gradient(to right, #4E2DD1 50%, #8C3FD9 100%)" }}
          onClick={handleReset}
          disabled={!termsAccepted}
        >
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
