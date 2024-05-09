import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Verifikasi from "./pages/VerifikasiAkun";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Register" element={<Register />} />
        <Route path="/Verifikasi" element={<Verifikasi />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
