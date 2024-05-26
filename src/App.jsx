import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Verifikasi from "./pages/VerifikasiAkun";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Overview from "./pages/Overview";
import Transaction from "./pages/Transaction";
import Budget from "./pages/Budget";
import Planning from "./pages/Planning";
import Notification from "./pages/Notification";
import Blog from "./pages/Blog";
import Setting from "./pages/Setting";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/verifikasi" element={<Verifikasi />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/overview" element={<Overview />}></Route>
        <Route path="/transaction" element={<Transaction />}></Route>
        <Route path="/budget" element={<Budget />}></Route>
        <Route path="/planning" element={<Planning />}></Route>
        <Route path="/notification" element={<Notification />}></Route>
        <Route path="/Setting" element={<Setting/>} />
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
};

export default App;
