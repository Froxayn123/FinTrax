import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthPageLayout from "@/components/layout/AuthPageLayout";
import Button from "@/components/ui/Button";
import TextInput from "@/components/ui/TextInput";
import MailIcon from "@/components/svg/MailIcon";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("Email:", email);
    navigate("/login");
  };

  return (
    <AuthPageLayout>
      <div className="flex justify-center items-center h-screen">
        <div className="w-[680px] h-[656px] p-16 flex flex-col justify-center items-center bg-none bg-blue-500 bg-opacity-20 rounded-[36px] space-y-6">
          <h1 className="text-6xl text-white font-semibold">Forgot Password ?</h1>
          <p className="sm:text-lg text-sm text-center text-white">Enter your email to reset your password.</p>
          <TextInput type="text" svg={MailIcon("fill-[#718096]")} placeholder="Please enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Button type="submit" onClick={handleSubmit} title="Submit" size="w-full" />
          <Link to="/login" className="text-[#CD37FF] hover:underline">
            Back
          </Link>
        </div>
      </div>
    </AuthPageLayout>
  );
};

export default ForgotPasswordPage;
