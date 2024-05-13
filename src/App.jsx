import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Verifikasi from "./pages/VerifikasiAkun";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Verifikasi" element={<Verifikasi />}></Route>
      </Routes>
    </>
  );
};

export default App;








