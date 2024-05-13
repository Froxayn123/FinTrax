import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Verifikasi from "./pages/VerifikasiAkun";
import Register from "./pages/Register";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/verifikasi" element={<Verifikasi />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
};

export default App;
