import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginProduct from "./pages/LoginProduct";
import LoginPassword from "./pages/LoginPassword";
import OTPVerify from "./pages/OTPVerify";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"         element={<LoginProduct />} />
        <Route path="/password" element={<LoginPassword />} />
        <Route path="/otp"      element={<OTPVerify />} />
        <Route path="/signup"   element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;