import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("Username:", username);
    console.log("Password:", password);
    navigate("/Overview");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url("BGLogin.jpg")` }}>
      <div className="max-w-4xl w-full p-8 bg-blue-500 bg-opacity-20 shadow-xl rounded-3xl flex items-center">
        <div className="flex-none pr-8">
          <h2 className="text-2xl text-white font-bold mb-4">
            Helping You Achieve
            <br />
            Your Financial Future,
            <br /> One Transaction at a<br />
            Time.
          </h2>
          <img src={"ilustrasi login.png"} alt="Illustration" className="h-auto max-h-72" />
        </div>

        <div className="flex-grow p-8 bg-white bg-opacity-5 flex flex-col justify-center items-center min-h-auto rounded-xl">
          <h1 className="text-3xl text-white font-bold mb-4">Login</h1>
          <div className="flex w-full items-center text-lg relative">
            <svg className="absolute left-2 bottom-4 transform -translate-y-1/2" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{ fill: "#718096" }}>
              <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path>
            </svg>
            <input type="text" placeholder="Username" className="w-full border rounded-lg py-2 px-3 pl-10 mb-4" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="flex w-full items-center text-lg relative">
            <svg className="absolute left-3 bottom-4 transform -translate-y-1/2" width="20" viewBox="0 0 24 24" style={{ fill: "#718096" }}>
              <path d="M12 2C9.243 2 7 4.243 7 7v2H6c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v2H9V7zm9.002 13H13v-2.278c.595-.347 1-.985 1-1.722 0-1.103-.897-2-2-2s-2 .897-2 2c0 .736.405 1.375 1 1.722V20H6v-9h12l.002 9z"></path>
            </svg>
            <input type="password" placeholder="Password" className="w-full border rounded-lg py-2 px-3 pl-10 mb-4" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="flex flex-wrap -mx-4 mb-6 items-center justify-between">
            <div className="w-full mr-40 lg:w-auto px-4 mb-4 lg:mb-0">
              <label>
                <input type="checkbox" />
                <span className="ml-1 text-xs text-white">Remember me</span>
              </label>
            </div>
            <div className="w-full lg:w-auto px-3">
              <Link to="/ForgotPassword" className="text-[#CD37FF] hover:underline text-sm">
                Forgot Password ?
              </Link>
            </div>
          </div>
          <button className="w-full text-white font-bold py-2 px-4 rounded-lg" style={{ background: "linear-gradient(to right, #4E2DD1 50%, #8C3FD9 100%)" }} onClick={handleLogin}>
            Login
          </button>
          <p className="mt-4 text-sm text-white">
            Dont have an account?{" "}
            <Link to="/register" className="text-[#CD37FF] hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
