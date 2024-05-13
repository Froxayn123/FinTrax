import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Verifikasi from "./pages/VerifikasiAkun";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
         <Route path="/Login" element={<Login />}></Route>
        <Route path="/Verifikasi" element={<Verifikasi />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
};

export default App;
