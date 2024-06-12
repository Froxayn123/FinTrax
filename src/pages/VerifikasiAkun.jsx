import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Verifikasi = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/Home");
    }, 10000);
    return () => clearTimeout(timer);
  }, [navigate]);

  const styles = {
    icon: {
      marginTop: "16px",
      width: "64px",
      height: "64px",
      fill: "#64CC4A",
      animation: "pulse 2s infinite",
    },
  };

  const keyframes = `
    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url("BGLogin.jpg")` }}>
        <div className="max-w-3xl w-full p-20 bg-blue-500 bg-opacity-20 shadow-xl rounded-3xl flex flex-col justify-center items-center">
          <h1 className="text-4xl text-white font-bold mb-10">Verification in Progress</h1>
          <div className="flex-grow p-8 bg-[#003166] bg-opacity-20 border-2 border-[#91C0F2] border-opacity-20 shadow-xl flex flex-col justify-center items-center min-h-auto rounded-xl">
            <h4 className="text-center text-2xl text-white">We have sent a link to verify your account. Please check your inbox.</h4>
            <svg className="bi bi-check-circle" style={styles.icon} viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
            </svg>
            <p className="mt-4 text-sm text-white">
              Didn’t get an email?{" "}
              <Link to="/Register" className="text-blue-500 hover:underline">
                Resend Link
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Verifikasi;
