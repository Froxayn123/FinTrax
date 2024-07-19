import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import AuthPageLayout from "@/components/layout/AuthPageLayout";
import ChecklistIcon from "@/components/svg/ChecklistIcon";

const VerifiedPage = () => {
  const [searchParams] = useSearchParams();
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [message, setMessage] = useState("");
  const emailToken = searchParams.get("emailToken");
  const navigate = useNavigate();

  useEffect(() => {
    const verification = async () => {
      try {
        if (emailToken !== null) {
          const response = await axios.get(`${import.meta.env.VITE_APP_BASE_API}/register/confirm/${emailToken}`);
          setMessage(response.data.payload.message);
          setIsConfirmed(true);
          setTimeout(() => {
            navigate("/");
          }, 3000);
        }
      } catch (error) {
        setMessage(error.response.data.payload.message);
        setIsConfirmed(true);
      }
    };
    verification();
  }, [emailToken, navigate]);

  return (
    <>
      <AuthPageLayout>
        <div className="flex justify-center items-center h-screen">
          <div className="w-[1100px] h-[750px] p-16 flex flex-col justify-center items-center bg-none bg-blue-500 bg-opacity-20 rounded-[36px] space-y-8">
            {isConfirmed ? (
              <h1 className="text-center text-[57px] text-white font-medium font-['Roboto']">{message}</h1>
            ) : (
              <>
                <h1 className="text-[57px] text-white font-medium font-['Roboto']">Verification in Progress</h1>
                <div className="w-[600px] p-20 flex flex-col justify-center items-center space-y-8 bg-opacity-20 bg-sky-900 rounded-[50px] shadow border-2 border-blue-300 backdrop-blur-sm">
                  <h4 className="w-[500px] text-center text-2xl font-normal font-['Roboto'] text-white">We have sent a link to verify your account. Please check your inbox.</h4>
                  <ChecklistIcon />
                  <p className="text-white text-2xl font-normal font-['Roboto']">
                    Didn’t get an email?{" "}
                    <Link to="/Register" className="text-fuchsia-500 hover:underline">
                      Resend Link
                    </Link>
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </AuthPageLayout>
    </>
  );
};

export default VerifiedPage;
