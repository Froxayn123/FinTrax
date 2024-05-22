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
import Notification from "./pages/Notification";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/verifikasi" element={<Verifikasi />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Overview" element={<Overview />}></Route>
        <Route path="/Transaction" element={<Transaction />}></Route>
        <Route path="/Budget" element={<Budget />}></Route>
        <Route path="/notification" element={<Notification />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
};

export default App;
