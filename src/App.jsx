import { Routes, Route } from "react-router-dom";
import NotFoundPage from "@/pages/NotFoundPage";
import LoginPage from "@/pages/LoginPage";
import ForgotPasswordPage from "@/pages/ForgotPasswordPage";
import ResetPasswordPage from "@/pages/ResetPasswordPage";
import RegisterPage from "@/pages/RegisterPage";
import HomePage from "@/pages/HomePage";
import OverviewPage from "@/pages/User/OverviewPage";
import TransactionPage from "@/pages/User/TransactionPage";
import BudgetPage from "@/pages/User/BudgetPage";
import PlanningPage from "@/pages/User/PlanningPage";
import NotificationPage from "@/pages/User/NotificationPage";
import BlogPage from "@/pages/BlogPage";
import BlogDetail from "@/components/All/BlogDetail";
import SettingPage from "@/pages/User/SettingPage";
import AboutUsPage from "@/pages/AboutUsPage";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage";
import FinancialTipsPage from "@/pages/FinancialTipsPage";
import AdminUserPage from "@/pages/Admin/AdminUserPage";
import AdminContentPage from "@/pages/Admin/AdminContentPage";
import AdminSettingPage from "@/pages/Admin/AdminSettingPage";
import DashboardAdminPage from "@/pages/Admin/AdminDashboardPage";
import TermsPage from "@/pages/TermsPage";
import VerifiedPage from "@/pages/VerifiedPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot" element={<ForgotPasswordPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/reset" element={<ResetPasswordPage />} />
      <Route path="/verification" element={<VerifiedPage />} />
      <Route path="/overview" element={<OverviewPage />} />
      <Route path="/transaction" element={<TransactionPage />} />
      <Route path="/budget" element={<BudgetPage />} />
      <Route path="/planning" element={<PlanningPage />} />
      <Route path="/notification" element={<NotificationPage />} />
      <Route path="/setting" element={<SettingPage />} />
      <Route path="/dashboard" element={<DashboardAdminPage />} />
      <Route path="/user" element={<AdminUserPage />} />
      <Route path="/content" element={<AdminContentPage />} />
      <Route path="/setting" element={<AdminSettingPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:id" element={<BlogDetail />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/privacypolicy" element={<PrivacyPolicyPage />} />
      <Route path="/terms" element={<TermsPage />}></Route>
      <Route path="/financialtips" element={<FinancialTipsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
