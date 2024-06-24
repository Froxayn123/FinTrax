import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NotFound from "./pages/NotFound";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Verifikasi from "./pages/VerifikasiAkun";
import Register from "./pages/Register";
// import Home from "./pages/Home";
import Overview from "./pages/Overview";
import Transaction from "./pages/Transaction";
import Budget from "./pages/Budget";
import Planning from "./pages/Planning";
import Notification from "./pages/Notification";
import Blog from "./pages/Blog";
import BlogDetail from "./components/BlogDetail";
import Setting from "./pages/Setting";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import FinancialTips from "./pages/FinancialTips";
import AdminUser from "./pages/AdminUser";
import AdminContent from "./pages/AdminContent";
import AdminSetting from "./pages/AdminSetting";
import Dashboard_Admin from "./pages/Dashboard_Admin";
import Treams from "./pages/Treams";

const App = () => {
  const location = useLocation();

  React.useEffect(() => {
    const element = document.getElementById(location.hash.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verifikasi" element={<Verifikasi />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/overview" element={<Overview />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/planning" element={<Planning />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/Setting" element={<Setting />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/Treams" element={<Treams />}></Route>
        <Route path="/FinancialTips" element={<FinancialTips />} />
        <Route path="/AdminDashboard" element={<Dashboard_Admin />} />
        <Route path="/AdminUser" element={<AdminUser />} />
        <Route path="/AdminContent" element={<AdminContent />} />
        <Route path="/AdminSetting" element={<AdminSetting />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
